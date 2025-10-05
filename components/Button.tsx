import React from "react"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm'
      case 'large':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2 text-base'
    }
  }

  const getShapeClasses = () => {
    switch (shape) {
      case 'rounded-sm':
        return 'rounded-sm'
      case 'rounded-full':
        return 'rounded-full'
      default:
        return 'rounded-md'
    }
  }

  return (
    <button 
      className={`bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors ${getSizeClasses()} ${getShapeClasses()}`}
    >
      {title}
    </button>
  )
}

export default Button

