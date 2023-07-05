import {
  Box,
  Button,
  Center,
  HStack,
  Link,
  Text,
  VStack,
  useMediaQuery, // Import the useMediaQuery hook
} from "@chakra-ui/react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import React from "react";

import Reveal from "../globals/Reveal";

const HomePage = () => {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const handleButtonClick = () => {
    const sectionSelector = document.getElementById("about-section");
    if (sectionSelector) {
      sectionSelector.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const [isMobile] = useMediaQuery("(max-width: 756px)"); // Set the breakpoint for iPhone XR
  const boxHeight = isMobile ? "100vh" : "100vh";

  return (
    <Box
      w={isMobile ? "100vw" : { base: "45vw", md: "100vw" }} // Adjust the width based on the device
      h={boxHeight} // Adjust the height based on the device
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="brand.white"
      position="relative"
    >
      <Reveal>
        <Box textAlign="center" color="white">
          <Button variant="link" onClick={handleButtonClick}>
            <HStack>
              <Text
                fontFamily="anybodyVariable"
                fontWeight="bold"
                fontSize={isMobile ? "5xl" : "8xl"} // Adjust the font size based on the device
                color="black"
                display="inline"
                verticalAlign="middle"
              >
                DANNY XU
              </Text>
              <Text
                color="black"
                fontFamily="anybodyVariable"
                fontWeight="bold"
                fontSize={isMobile ? "5xl" : "8xl"} // Adjust the font size based on the device
                display="inline"
                verticalAlign="middle"
                ml={-2}
              >
                .
              </Text>
            </HStack>
          </Button>
        </Box>
      </Reveal>

      <Button
        onClick={handleScrollDown}
        position="absolute"
        bottom="0"
        right="0"
        p="40px"
        color="black"
        fontFamily="anybodyVariable"
        fontWeight="bold"
        fontSize="30"
        zIndex="1"
        backgroundColor="transparent"
        _hover={{ cursor: "pointer" }}
      >
        ⇣
      </Button>
    </Box>
  );
};

export default HomePage;
