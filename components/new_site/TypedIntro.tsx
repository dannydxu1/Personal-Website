import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, chakra, Text } from "@chakra-ui/react";
const TypedIntro = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["👋 Hey, I'm Danny"],
      typeSpeed: 25, // Typing speed in milliseconds
      backSpeed: 30, // Backspacing speed in milliseconds
      startDelay: 1000, // Delay before typing starts in milliseconds
      showCursor: true, // Show blinking cursor
      cursorChar: "|", // Custom cursor character
      loop: false, // Whether to loop the animation
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box mt={4} fontWeight="bold" fontSize="3xl">
      <chakra.span ref={typingRef}></chakra.span>
    </Box>
  );
};

export default TypedIntro;
