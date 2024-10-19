'use client'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick} 
    className={`bg-black text-white px-4 py-2 rounded ${className}`}
  >
    {children}
  </button>
)

export default Button