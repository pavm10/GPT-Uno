"use client"

import { useEffect, useState } from "react"

const AnalysisResults = ({ text }) => {
  const [highlightedText, setHighlightedText] = useState("")
  const [aiDetected, setAiDetected] = useState(87)
  const [humanContent, setHumanContent] = useState(13)
  const [confidenceLevel, setConfidenceLevel] = useState(87)

  useEffect(() => {
    // This function simulates highlighting random phrases that indicate AI patterns
    // In a real application, this would be done by an AI detection algorithm
    const highlightRandomPhrases = (text) => {
      if (!text) return ""

      const sentences = text.split(". ")

      // Select a random sentence to highlight (for demonstration purposes)
      // In a real app, this would be based on actual AI detection patterns
      const randomIndex = Math.floor(Math.random() * sentences.length)

      // Create a new array with the highlighted sentence
      const highlightedSentences = sentences.map((sentence, index) => {
        if (index === randomIndex) {
          return `<span class="highlight-phrase">${sentence}</span>`
        }
        return sentence
      })

      return highlightedSentences.join(". ")
    }

    setHighlightedText(highlightRandomPhrases(text))
  }, [text])

  const characterCount = text ? text.length : 0
  const wordCount = text ? text.trim().split(/\s+/).length : 0

  return (
    <div className="analysis-results-wrapper">
      <div className="analysis-results">
        <h3 className="results-title">Analysis Results</h3>

        <div className="metrics-container">
          <div className="metric-box">
            <div className="metric-title">AI Detected</div>
            <div className="metric-card">
              <div className="metric-circle ai">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle ai"
                    strokeDasharray={`${aiDetected}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="percentage">{aiDetected}%</div>
              </div>
              <div className="metric-label">High Likelihood of AI content</div>
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-title">Human Content</div>
            <div className="metric-card">
              <div className="metric-circle human">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle human"
                    strokeDasharray={`${humanContent}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="percentage">{humanContent}%</div>
              </div>
              <div className="metric-label">Low Presence of Human Content</div>
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-title">Confidence Level</div>
            <div className="metric-card">
              <div className="metric-circle confidence">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle confidence"
                    strokeDasharray={`${confidenceLevel}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="percentage">{confidenceLevel}%</div>
              </div>
              <div className="metric-label">High Confidence in AI Detection</div>
            </div>
          </div>
        </div>

        <div className="analyzed-text-container">
          {/* Using dangerouslySetInnerHTML to render the highlighted text */}
          <div
            dangerouslySetInnerHTML={{
              __html:
                highlightedText || (text ? text.replace(/<span class="highlight-phrase">(.*?)<\/span>/g, "$1") : ""),
            }}
          />

          {/* This is where we show the text with highlighted phrases */}
          {/* In a real app, the AI would identify specific phrases that indicate AI generation */}
          <div className="text-stats">
            <span className="character-stat">{characterCount} Characters</span>
            <span className="word-stat">{wordCount} Words</span>
          </div>

          <div className="highlight-info">
            <img src="/src/assets/icons/warning.png" alt="Warning" className="warning-icon" />
            <span className="info-text">The highlighted area indicates high probability of AI generation.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisResults
