import {
  Box,
  Button,
  Center,
  Image,
  HStack,
  UnorderedList,
  ListItem,
  Flex,
  Link,
  Text,
  VStack,
  Icon,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";

import Header from "./Header";
import Reveal from "../globals/Reveal";
import PageStepper from "./PageStepper";
import ProjectView from "./ProjectView";
import QuickBio from "./QuickBio";
import Body from "./Body";
import Skills from "./Skills";
import Footer from "./Footer";
import "../../styles/altwebsite.css";

const AltWebsite = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  const screenWidth = isMobile ? "80vw" : "60vw";

  return (
    <Box minH="100vh" pt="1vh">
      <Flex flexDirection="column" alignItems="center">
        <Box w={screenWidth} mb="1vh">
          <Header />
        </Box>
        <QuickBio isMobile={isMobile} />
        <Body isMobile={isMobile} />
        <Skills />
        <Footer />
      </Flex>
    </Box>
  );
};

export default AltWebsite;
