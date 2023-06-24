import {
  Box,
  Button,
  Center,
  HStack,
  Link,
  Text,
  VStack,
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

  return (
    <Box
      w="100vw"
      h="100vh"
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
                fontSize="8xl"
                color="black"
                display="inline"
                verticalAlign="middle"
              >
                DANNY XU
              </Text>
              <Text
                color="brand.red"
                fontFamily="anybodyVariable"
                fontWeight="bold"
                fontSize="8xl"
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
