"use client"

import { useState, useRef, useEffect } from "react"
import Button from "./Button"

const TextInput = ({ onDetect }) => {
  const [text, setText] = useState("")
  const [showScroll, setShowScroll] = useState(false)
  const textareaRef = useRef(null)

  const handleTextChange = (e) => {
    setText(e.target.value)
    checkScrollHeight()
  }

  const checkScrollHeight = () => {
    if (textareaRef.current) {
      const isScrollable = textareaRef.current.scrollHeight > textareaRef.current.clientHeight
      setShowScroll(isScrollable && text.length > 100) // Only show scroll indicator when there's substantial text
    }
  }

  useEffect(() => {
    checkScrollHeight()
    window.addEventListener("resize", checkScrollHeight)
    return () => window.removeEventListener("resize", checkScrollHeight)
  }, [text])

  const characterCount = text.length
  const maxCharacters = 10000

  return (
    <div className="text-input-container">
      <div className="text-area-wrapper">
        <textarea
          ref={textareaRef}
          placeholder="Enter your text here..."
          value={text}
          onChange={handleTextChange}
          className="text-input"
        />
        {showScroll && <div className="input-indicator"></div>}
      </div>
      <div className="text-input-footer">
        <div className="character-count">
          {characterCount}/{maxCharacters} Characters
        </div>
        <Button type="detect" onClick={() => onDetect(text)} disabled={characterCount === 0} className="detect-button">
          Detect Text
        </Button>
      </div>
    </div>
  )
}

export default TextInput
