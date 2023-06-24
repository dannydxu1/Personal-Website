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
import { NextPage } from "next";

import AnimatedDescription from "./AnimatedDescription";

const StartPage = () => {
  return (
    <Box
      display="flex"
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="left"
      ml="15vw"
    >
      <VStack align="flex-start">
        <AnimatedDescription />
      </VStack>
    </Box>
  );
};

export default StartPage;
