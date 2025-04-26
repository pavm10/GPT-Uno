"use client"

import { useEffect, useState } from "react"

const LoadingPage = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 10) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-container">
      <div className="logo-container">
        <img
          src="/src/assets/icons/gptuno_logo.png"
          alt="GPT UNO Logo"
          className="logo"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
      <h1 className="logo-text">GPT UNO</h1>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  )
}

export default LoadingPage
