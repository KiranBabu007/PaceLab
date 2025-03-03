"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TextGenerateEffect({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) {
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCompleted(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  
  const wordsArray = words.split(" ");
  
  return (
    <div className={`text-lg md:text-xl font-light text-purple-200 ${className}`}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={`${word}-${idx}`}
            className="inline-block mr-1"
            initial={{ opacity: 0 }}
            animate={completed ? { opacity: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: idx * 0.05,
              ease: "easeInOut",
            }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </div>
  );
}