"use client";

import React from "react";
import {
  motion,
  type AnimationProps,
  type HTMLMotionProps,
} from "motion/react";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 1 }, // Removed initial scale animation
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.98 }, // Subtle scale on tap
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 1.5, // Added fixed duration
    ease: "linear", // Linear animation for smooth shine effect
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
} as AnimationProps;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-lg px-6 py-3 font-medium backdrop-blur-xl",
          "bg-gradient-to-r from-purple-800",
          "hover:from-purple-500 hover:via-pink-600 hover:to-violet-950 hover:text-white",
          "text-white shadow-lg shadow-purple-950/50",
          "transition-all duration-300",
          "flex items-center gap-2",
          className
        )}
      >
        <span
          className="relative block size-full text-base uppercase tracking-wide font-semibold"
          style={{
            maskImage:
              "linear-gradient(-75deg,rgba(255,255,255,1) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),rgba(255,255,255,1) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(139,92,246,0.3)_calc(var(--x)+20%),rgba(139,92,246,0.7)_calc(var(--x)+25%),rgba(139,92,246,0.3)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
