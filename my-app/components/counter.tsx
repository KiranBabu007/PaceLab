'use client'

import { useState, useEffect, useCallback } from 'react'

const TOTAL_BOOKINGS = 10363; // Fixed number instead of random
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
    <div className="p-4 text-center flex flex-col items-center justify-center">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-white/90 
          via-purple-200 
          to-white/90 tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-white/90 to-purple-200 ml-1">
          +
        </span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold text-white/90">
          Students Enrolled
        </span>
        <div className={`text-xs text-purple-200 transition-opacity duration-500 ${isAnimationComplete ? 'opacity-100' : 'opacity-0'}`}>
          Join our community today!
        </div>
      </div>
    </div>
  )
}