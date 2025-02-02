'use client'

import { useState, useEffect, useCallback } from 'react'

const TOTAL_BOOKINGS = 10000
const ANIMATION_DURATION = 2000 // 2 seconds

export default function BookingCounter() {
  const [count, setCount] = useState(0)

  const easeOutQuad = (t: number): number => t * (2 - t)

  const animateValue = useCallback((timestamp: number, start: number) => {
    const progress = Math.min((timestamp - start) / ANIMATION_DURATION, 1)
    const easedProgress = easeOutQuad(progress)
    const currentCount = Math.floor(easedProgress * TOTAL_BOOKINGS)
    
    setCount(currentCount)

    if (progress < 1) {
      requestAnimationFrame((newTimestamp) => animateValue(newTimestamp, start))
    }
  }, [])

  useEffect(() => {
    const startAnimation = (timestamp: number) => {
      animateValue(timestamp, timestamp)
    }

    requestAnimationFrame(startAnimation)
  }, [animateValue])

  return (
    <div className=" pl-5 text-center flex flex-col items-center justify-center shadow-lg">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
    from-gray-300 
    via-gray-100 
    to-gray-300 tabular-nums mr-2">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl font-bold text-gray-400">+</span>
      </div>
      
    </div>
  )
}

