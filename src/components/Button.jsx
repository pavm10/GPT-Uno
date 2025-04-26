"use client"

const Button = ({ children, onClick, type = "primary", disabled = false, className = "", icon = null }) => {
  const getButtonClass = () => {
    switch (type) {
      case "primary":
        return "bg-[#F79F3A] text-white border-none rounded hover:bg-[#e68d29] transition-colors"
      case "secondary":
        return "bg-transparent text-white border-none hover:text-[#F79F3A] transition-colors"
      case "outline":
        return "bg-transparent text-white border border-[#F79F3A] rounded-full hover:bg-[#F79F3A] hover:text-white transition-colors"
      case "detect":
        return "bg-[#F79F3A] text-white border-none rounded hover:bg-[#e68d29] transition-colors"
      default:
        return "bg-[#F79F3A] text-white border-none rounded hover:bg-[#e68d29] transition-colors"
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClass()} px-4 py-2 cursor-pointer font-medium flex items-center justify-center gap-2 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
      {icon && icon}
    </button>
  )
}

export default Button
