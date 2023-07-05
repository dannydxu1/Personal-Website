import {
  Center,
  extendTheme,
  VStack,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Reveal from "../globals/Reveal";
import ProjectSection from "../experiences/ProjectSection";
import SectionTitle from "../globals/SectionTitle";

const ProjectPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxHeight = isMobile ? "100vh" : "50vh";

  const projects = [
    {
      id: 1,
      title: "CivConnect (Minnehack 2023)",
      duration: "Jan 2023",
      highlights: [
        "Led team in creation of a website aimed at matching voters with candidates with similar political views.",
        "Implemented the Cheerio, Axios, Request libraries to scrape data from multiple webpages.",
        "Set up a Firebase database to store the data; implemented functions to send and receive the data.",
      ],
      skills: ["JavaScript", "NodeJS", "Firebase"],
    },
    {
      id: 2,
      title: "Cash Register Counter",
      duration: "Jan 2022 — May 2022",
      highlights: [
        "Built and published an app on the iOS App Store in Swift to expedite the counting of cash registers.",
        "Implemented MVVM Architecture to organize code development and improve ease-of-access.",
        "Amassed 20,000+ impressions and 500+ downloads.",
      ],
      skills: ["Swift", "SwiftUI", "Testflight"],
    },
    {
      id: 2,
      title: "Mech-Market Scraper",
      duration: "Oct 2021 — Feb 2022",
      highlights: [
        "Created a web-scraper which searched for selling listings from reddit.com/r/mechmarket by keyword.",
        "Implemented Cheerio (jQuery subset) to traverse the DOM in search of website attributes.",
        "Drastically reduced search times through headless web scraping by bypassing UI rendering",
      ],
      skills: ["JavaScript", "NodeJS", "Cheerio"],
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h={boxHeight}
      bgColor="brand.white"
      id="projects-section"
    >
      <Box
        w={{ base: "100vw", md: "45vw" }}
        h={boxHeight}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        bg="brand.white"
        position="relative"
      >
        <VStack align="flex-start" maxW="800px" p={4}>
          <SectionTitle
            titleName="Projects"
            rightAlign={false}
            color="brand.blue"
          />
          <Reveal>
            <VStack align="flex-start" spacing={4}>
              <ProjectSection projects={projects} />
            </VStack>
          </Reveal>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProjectPage;
