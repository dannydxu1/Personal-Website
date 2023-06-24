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

import Reveal from "../globals/Reveal";
const Page = () => {
  return (
    <Box
      w="100vw"
      h="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#efeff0"
      position="relative"
    ></Box>
  );
};

export default Page;
