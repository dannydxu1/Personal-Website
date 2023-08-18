import { Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Reveal from "../globals/Reveal";

const Footer = () => {
  const footerColor = useColorModeValue("gray.600", "#dedede");

  return (
    <Reveal>
      <VStack>
        <Text fontSize="md" color={footerColor}>
          Made with ❤️ by Danny Xu.
        </Text>
        <Text fontSize="md" color={footerColor} mb="4vh">
          Last update: August 18th, 2023
        </Text>
      </VStack>
    </Reveal>
  );
};

export default Footer;
