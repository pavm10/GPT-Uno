"use client"

import { useState, useRef, useEffect } from "react"
import TextInput from "../components/TextInput"
import DetectingPage from "../components/DetectingPage"
import AnalysisResults from "../components/AnalysisResults"
import { LoginModal, SignUpModal } from "../components/Modals"
import Button from "../components/Button"

const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [inputText, setInputText] = useState("")

  const detectorRef = useRef(null)
  const howItWorksRef = useRef(null)

  // Prevent scrolling when modals are open
  useEffect(() => {
    if (showLoginModal || showSignUpModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showLoginModal, showSignUpModal])

  // Handle ESC key to close modals
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setShowLoginModal(false)
        setShowSignUpModal(false)
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [])

  const scrollToSection = (section) => {
    if (section === "detector" && detectorRef.current) {
      detectorRef.current.scrollIntoView({ behavior: "smooth" })
      setActiveSection("detector")
    } else if (section === "howItWorks" && howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" })
      setActiveSection("howItWorks")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("home")
    }
  }

  // Check scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      if (detectorRef.current && howItWorksRef.current) {
        const detectorPosition = detectorRef.current.offsetTop
        const howItWorksPosition = howItWorksRef.current.offsetTop

        if (scrollPosition >= howItWorksPosition) {
          setActiveSection("howItWorks")
        } else if (scrollPosition >= detectorPosition) {
          setActiveSection("detector")
        } else {
          setActiveSection("home")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDetect = (text) => {
    setInputText(text)
    setIsDetecting(true)
    setAnalysisResults(null)

    // Simulate API call
    setTimeout(() => {
      setIsDetecting(false)
      if (text.trim()) {
        setAnalysisResults(true)
      }
    }, 2000)
  }

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal)
    setShowSignUpModal(false)
  }

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal)
    setShowLoginModal(false)
  }

  const handleCreateAccount = () => {
    setShowLoginModal(false)
    setShowSignUpModal(true)
  }

  const closeModal = () => {
    setShowLoginModal(false)
    setShowSignUpModal(false)
  }

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-section">
          <img src="/src/assets/icons/gptuno_logo.png" alt="GPT UNO Logo" className="nav-logo" />
          <span className="logo-text">GPT UNO</span>
        </div>
        <nav className="navigation">
          <a
            href="#"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
          >
            Home
          </a>
          <a
            href="#detector"
            className={`nav-link ${activeSection === "detector" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("detector")
            }}
          >
            Detector
          </a>
          <a
            href="#how-it-works"
            className={`nav-link ${activeSection === "howItWorks" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("howItWorks")
            }}
          >
            How It Works
          </a>
        </nav>
        <div className="auth-buttons">
          <Button type="secondary" onClick={toggleLoginModal} className="login-button">
            Login
          </Button>
          <Button type="primary" onClick={toggleSignUpModal} className="signup-button">
            Sign Up
          </Button>
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Is It Human or AI?</h1>
          <h2 className="hero-subtitle">
            <span className="highlight">Unmask</span> the <span className="highlight">Truth</span> Instantly
          </h2>
          <p className="hero-description">
            Upload or paste any content. We scan every sentence, highlighting AI patterns from ChatGPT, Claude, and
            Gemini in real time.
          </p>
          <button className="intro-button">
            <img src="/src/assets/icons/sparkler.png" alt="Sparkle" className="sparkle-icon" />
            <span>Introducing GPT Uno</span>
            <img src="/src/assets/icons/arrow.png" alt="Arrow" className="arrow-icon" />
          </button>
        </div>

        <div id="detector" ref={detectorRef} className="detector-section">
          <h2 className="section-title">AI CONTENT DETECTOR</h2>
          <div className="detector-underline"></div>

          <TextInput onDetect={handleDetect} />

          {isDetecting && <DetectingPage />}
          {analysisResults && <AnalysisResults text={inputText} />}
        </div>

        <div id="how-it-works" ref={howItWorksRef} className="how-it-works-section">
          <div className="about-section">
            <div className="about-logo-container">
              <img src="/src/assets/icons/gptuno_logo.png" alt="GPT UNO Logo" className="about-logo-img" />
              <h2 className="about-logo-text">GPT UNO</h2>
            </div>
            <div className="about-description-container">
              <p className="about-description">
                GPT Uno is a web-based AI content detector designed to identify whether a given text was likely written
                by a human or generated by artificial intelligence, such as ChatGPT or similar tools. The name "GPT Uno"
                combines GPT (Generative Pre-trained Transformer) — the AI model often used to create text — and "Uno",
                meaning "one" or "first," symbolizing simplicity, reliability, or being your go-to solution for quick AI
                content checking.
              </p>
            </div>
          </div>
        </div>
      </main>

      {showLoginModal && <LoginModal onClose={closeModal} onCreateAccount={handleCreateAccount} />}
      {showSignUpModal && <SignUpModal onClose={closeModal} />}
    </div>
  )
}

export default HomePage
