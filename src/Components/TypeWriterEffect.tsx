import React, { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  children: ReactNode;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ children, speed = 50 }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const text = React.Children.toArray(children).join("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="typewriter-container">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
      </motion.span>
    </div>
  );
};

export default Typewriter;
