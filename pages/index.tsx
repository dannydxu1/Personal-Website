import {
  Center,
  extendTheme,
  Text,
  VStack,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState, WheelEvent, useEffect } from "react";
import { NextPage } from "next";

import AboutMePage from "../components/page_components/AboutPage";
import Header from "../components/globals/Header";
import HomePage from "../components/page_components/HomePage";
import ProjectsPage from "../components/page_components/ProjectsPage";
import ResumePage from "../components/page_components/ResumePage";
import ContactPage from "@/components/page_components/ContactPage";

const Home: NextPage = () => {
  return (
    <VStack align="center" bgColor="brand.white">
      <Box className="section-container">
        <HomePage />
      </Box>
      <Header />
      <Box className="section-container">
        <AboutMePage />
      </Box>
      <Box className="section-container">
        <ResumePage />
      </Box>
      <Box className="section-container">
        <ProjectsPage />
      </Box>
      <Box className="section-container">
        <ContactPage />
      </Box>
    </VStack>
  );
};

export default Home;
