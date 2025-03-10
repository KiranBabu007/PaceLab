'use client'

import { useState, useEffect, useCallback } from 'react'

const TOTAL_BOOKINGS = 10000
const ANIMATION_DURATION = 2000 // 2 seconds

export default function StudentEnrollmentCounter() {
  const [count, setCount] = useState(0)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  const easeOutQuad = (t: number): number => t * (2 - t)

  const animateValue = useCallback((timestamp: number, start: number) => {
    const progress = Math.min((timestamp - start) / ANIMATION_DURATION, 1)
    const easedProgress = easeOutQuad(progress)
    const currentCount = Math.floor(easedProgress * TOTAL_BOOKINGS)
    
    setCount(currentCount)

    if (progress < 1) {
      requestAnimationFrame((newTimestamp) => animateValue(newTimestamp, start))
    } else {
      setIsAnimationComplete(true)
    }
  }, [])

  useEffect(() => {
    const startAnimation = (timestamp: number) => {
      animateValue(timestamp, timestamp)
    }

    requestAnimationFrame(startAnimation)

    return () => {
      setCount(0)
      setIsAnimationComplete(false)
    }
  }, [animateValue])

  return (
    <div className="p-4 text-center flex flex-col items-center justify-center shadow-md rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-gray-400 
          via-gray-600 
          to-gray-500 tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-gray-400 to-gray-500 ml-1">
          +
        </span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold text-gray-700">
          Students Enrolled
        </span>
        <div className={`text-xs text-gray-500 transition-opacity duration-500 ${isAnimationComplete ? 'opacity-100' : 'opacity-0'}`}>
          Join our community today!
        </div>
      </div>
    </div>
  )
}