import React, { useEffect, useRef, useState } from "react";
import { Text, VStack, Button, Box } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import Typed from "typed.js";

const AnimatedDescription = () => {
  //for Typing Animation
  const textRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "a full stack developer",
        "an AI enthusiast",
        "a CS+Math undergrad@UW-Madison",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  //for Learn More BUtton
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const buttonAnimation = useSpring({
    to: async (next) => {
      while (true) {
        await next({ transform: "rotate(5deg)" });
        await next({ transform: "rotate(-5deg)" });
      }
    },
    from: { transform: "rotate(0deg)" },
    config: { tension: 500, friction: 1 },
  });

  return (
    <VStack align="flex-start">
      <Text fontSize="5xl" fontWeight="extrabold">
        Hi there👋, my name is&nbsp;
        <Text
          as="span"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Danny Xu,
        </Text>
      </Text>
      <Text fontSize="5xl" fontWeight="extrabold">
        I am <span ref={textRef}></span>
      </Text>
      <animated.div style={buttonAnimation}>
        <Button
          onClick={handleButtonClick}
          bg="white"
          boxShadow="md"
          rounded="md"
          p={4}
          borderRadius="md"
        >
          {" "}
          <Text
            fontSize="xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            rounded="md"
          >
            Learn More
          </Text>
        </Button>
      </animated.div>
    </VStack>
  );
};

export default AnimatedDescription;
