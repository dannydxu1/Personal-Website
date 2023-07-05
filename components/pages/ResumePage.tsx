import {
  Box,
  Center,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Reveal from "../globals/Reveal";
import ExperienceSection from "../experiences/ExperienceSection";
import EducationSection from "../experiences/EducationSection";
import SectionTitle from "../globals/SectionTitle";

const ResumePage = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Co-Op",
      company: "CommScope",
      location: "Shakopee, Minnesota",
      duration: "May 2023 — Present",
      highlights: [
        "Create a full stack application to support lab data analysis at scale.",
        "Develop a dynamic React dashboard to visualize test results 20x faster than previous solutions.",
        "Engineer an ASP.NET/EF Core backend for secure, efficient communication with the SQL Database.",
        "Improve testing efficiency through automation, saving 1000s of minutes daily.",
      ],
      skills: [
        "React",
        "TypeScript",
        "C#",
        "ASP.NET",
        "Entity Framework Core",
        "ChakraUI",
        "HTML",
        "CSS",
      ],
    },
    {
      id: 2,
      title: "Satellite Communications Research",
      company: "UMN Small Satellite Research Lab",
      location: "Minneapolis, MN",
      duration: "Sep 2022 — May 2023",
      highlights: [
        "Strengthened communications protocols between the ground station and the satellites.",
        "Completed unit testing in Python and Ubuntu to ensure proper data transmission.",
      ],
      skills: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    },
  ];

  const educations = [
    {
      id: 1,
      degreeTitle: "B.S, Majors: Computer Science, Math",
      institution: "University of Wisconsin, Madison",
      location: "Madison, WI",
      duration: "Sep 2023 — May 2026",
      highlights: [
        "Fall 2023 Coursework: Calculus III, Discrete Mathematics, Programming III",
        // "GPA: 3.8/4.0",
      ],
    },
    {
      id: 2,
      degreeTitle: "Transferred Institutions",
      institution: "University of Minnesota",
      location: "Minneapolis, MN",
      duration: "2022 — 2023",
      highlights: [
        "3.96/4.0 GPA — University Honors Program, 2x Dean’s List, Presidential Scholarship Recipient",
        "Activities: Science and Engineering Board Sub-director, App Developer Club Executive Officer",
        "Coursework: Intro to Algorithms, Data Structures, & Program Dev., Machine Architecture and Org.",
      ],
    },
  ];

  const [isMobile] = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as per your needs

  return (
    <Center minH="100vh" bg="brand.white">
      <Box
        w={{ base: "100vw", md: "45vw" }}
        maxW="800px"
        p={4}
        id="experience-section"
      >
        <VStack align="flex-start" spacing={4} w="100%">
          <SectionTitle
            titleName="Experience"
            rightAlign={true}
            color="brand.yellow"
          />
          <Reveal>
            <VStack align="flex-start" spacing={4} w="100%">
              <ExperienceSection experiences={experiences} />
            </VStack>
          </Reveal>
          <SectionTitle
            titleName="Education"
            rightAlign={true}
            color="brand.green"
          />
          <Reveal>
            <VStack align="flex-start" spacing={4} w="100%">
              <EducationSection educations={educations} />
            </VStack>
          </Reveal>
        </VStack>
      </Box>
    </Center>
  );
};

export default ResumePage;
