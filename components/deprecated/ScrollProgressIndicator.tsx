import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollProgress(value * 100);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <svg width={radius * 2} height={radius * 2}>
      <motion.circle
        cx={radius}
        cy={radius}
        r={radius - 5}
        fill="transparent"
        stroke="#000"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={useTransform(
          scrollYProgress,
          [0, 1],
          [circumference, 0]
        )}
      />
    </svg>
  );
};

export default ScrollProgressIndicator;
