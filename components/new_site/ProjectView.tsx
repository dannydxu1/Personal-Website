import {
  Box,
  chakra,
  Button,
  Center,
  Image,
  HStack,
  ListItem,
  Flex,
  Card,
  CardFooter,
  Link,
  Text,
  Stack,
  CardBody,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";

import Reveal from "../globals/Reveal";
import ProjectCard from "./ProjectCard";
import "../../styles/altwebsite.css";

interface Project {
  imageSrc: string;
  headline: string;
  skills: string[];
  description: string;
}

const projects: Project[] = [
  //   {
  //     imageSrc: "https://example.com/project1-image.jpg",
  //     headline: "Project 1",
  //     skills: ["React", "TypeScript", "Chakra UI"],
  //     description: "This is the first project description.",
  //   },
  {
    imageSrc: "CashRegisterCounter.png",
    headline: "Cash Register Counter - Available for iOS",
    skills: ["Swift", "SwiftUI", "Testflight"],
    description:
      "Built and published an iOS app on the App Store, leveraging Swift amassing 20,000+ impressions. Implemented MVVM Architecture to organize code development and improve code maintainability.",
  },
  {
    imageSrc: "Keyboards.JPG",
    headline: "Mech-Market Scraper",
    skills: ["JavaScript, Cheerio, NodeJS"],
    description:
      "Created a web-scraper which searched for selling listings from reddit.com/r/mechmarket by keyword. Drastically reduced search times through headless web scraping by bypassing UI rendering",
  },
  {
    imageSrc: "TipCalculator.png",
    headline: "TipCalculator",
    skills: ["Swift", "SwiftUI"],
    description:
      "Simple tip calculator app build for iOS, used to learn the basics. Heavily inspired by John Kouris from YouTube.",
  },
];

const ProjectView = () => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Flex>
  );
};

export default ProjectView;
