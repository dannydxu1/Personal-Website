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

import StartPage from "../components/StartPage";
import AboutMePage from "../components/AboutMePage";
import Header from "../components/Header";
import Footer from "../components/ConnectFooter";
import IntroPage from "@/components/IntroPage";

const Home: NextPage = () => {
  return (
    <VStack>
      {/* <Header />
      <StartPage />
      <AboutMePage />
      <Footer /> */}
      <IntroPage />
    </VStack>
  );
};

export default Home;
