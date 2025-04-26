"use client"

import { useState } from "react"
import Button from "./Button"

export const LoginModal = ({ onClose, onCreateAccount }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="modal-overlay">
      <div className="modal login-modal">
        <div className="modal-header">
          <img src="/src/assets/icons/gptuno_logo.png" alt="GPT UNO Logo" className="modal-logo-img" />
          <h2 className="modal-logo-text">GPT UNO</h2>
          <button className="modal-close" onClick={onClose}>
            <img src="/src/assets/icons/exit.png" alt="Close" />
          </button>
        </div>

        <h2 className="modal-title">Login to Your Account</h2>
        <p className="modal-subtitle">Please enter you details to login</p>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" placeholder="user@gmail.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <div className="password-input">
              <input type={showPassword ? "text" : "password"} id="password" placeholder="••••••" />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                <img
                  src={showPassword ? "/src/assets/icons/eye.png" : "/src/assets/icons/hidden.png"}
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>
          </div>

          <div className="form-check">
            <input type="checkbox" id="remember" className="custom-checkbox" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="account-prompt">
            Don't have an account?{" "}
            <button type="button" className="link-button" onClick={onCreateAccount}>
              Create an account
            </button>
          </div>

          <Button type="primary" className="auth-submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export const SignUpModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="modal-overlay">
      <div className="modal signup-modal">
        <div className="modal-header">
          <img src="/src/assets/icons/gptuno_logo.png" alt="GPT UNO Logo" className="modal-logo-img" />
          <h2 className="modal-logo-text">GPT UNO</h2>
          <button className="modal-close" onClick={onClose}>
            <img src="/src/assets/icons/exit.png" alt="Close" />
          </button>
        </div>

        <h2 className="modal-title">Create An Account</h2>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" placeholder="Juan Dela Cruz" />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">EMAIL</label>
            <input type="email" id="signup-email" placeholder="user@gmail.com" />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">PASSWORD</label>
            <div className="password-input">
              <input type={showPassword ? "text" : "password"} id="signup-password" placeholder="••••••" />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                <img
                  src={showPassword ? "/src/assets/icons/eye.png" : "/src/assets/icons/hidden.png"}
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
            <div className="password-input">
              <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" placeholder="••••••" />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <img
                  src={showConfirmPassword ? "/src/assets/icons/eye.png" : "/src/assets/icons/hidden.png"}
                  alt={showConfirmPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>
          </div>

          <div className="form-check">
            <input type="checkbox" id="signup-remember" className="custom-checkbox" />
            <label htmlFor="signup-remember">Remember me</label>
          </div>

          <Button type="primary" className="auth-submit">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}
