import React, { useEffect, useRef, useState } from "react";
import { Text, VStack, Button, Box } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import Typed from "typed.js";

const AnimatedDescription = () => {
  //for Typing Animation
  const textRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["A developer", "An engineer", "A student", "A designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <VStack align="flex-start">
      <Text fontSize="2xl" fontWeight="extrabold" fontFamily="anybodyVariable">
        <span ref={textRef}></span> passionate <br />
        about creating elegant software solutions.
      </Text>
    </VStack>
  );
};

export default AnimatedDescription;
