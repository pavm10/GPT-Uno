"use client"

import { BrowserRouter as Router } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage"
import LoadingPage from "./pages/LoadingPage"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return <Router>{loading ? <LoadingPage /> : <HomePage />}</Router>
}

export default App
