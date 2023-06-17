import {
  Center,
  extendTheme,
  Text,
  VStack,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";

const IntroPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="blue.500"
    >
      <Box position="absolute" top="0" left="0" p="20px" color="white">
        Top Left
      </Box>
      <Box textAlign="center" color="white">
        Center
      </Box>
      <Box position="absolute" bottom="0" right="0" p="20px" color="white">
        Bottom Right
      </Box>
    </Box>
  );
};

export default IntroPage;
