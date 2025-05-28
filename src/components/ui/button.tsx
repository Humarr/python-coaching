'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base = 'font-semibold rounded-2xl shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variants: Record<string, string> = {
    primary: 'bg-[#cc5500] text-white hover:bg-[#e06200] focus:ring-[#e06200]',
    secondary: 'bg-white text-[#cc5500] border border-[#cc5500] hover:bg-[#fff1e8] focus:ring-[#cc5500]'
  }

  const sizes: Record<string, string> = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  }

  const combinedClasses = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  )
}
