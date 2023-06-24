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
import ExperienceSection from "../resume/ExperienceSection";
import EducationSection from "../resume/EducationSection";
import SectionTitle from "../globals/SectionTitle";

const ProjectPage = () => {
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
      company: "University of Minnesota Small Satellite Research Lab",
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
      degreeTitle: "Bachelor of Science in Computer Science, Mathematics",
      institution: "University of Wisconsin, Madison",
      location: "Madison, WI",
      duration: "Sep 2023 - May 2026",
      highlights: [
        "Fall 2023 Coursework: Calculus III, Discrete Mathematics, Programming III",
        // "GPA: 3.8/4.0",
      ],
    },
    {
      id: 2,
      degreeTitle: "Major in Computer Science, Transferred Institutions",
      institution: "University of Minnesota, Twin Cities",
      location: "Minneapolis, MN",
      duration: "Sep 2022 - May 2023",
      highlights: [
        "3.96/4.0 GPA — University Honors Program, 2x Dean’s List, Presidential Scholarship Recipient",
        "Activities: Science and Engineering Board Sub-director, App Developer Club Executive Officer",
        "Coursework: Intro to Algorithms, Data Structures, & Program Dev., Machine Architecture and Org.",
      ],
    },
  ];
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw" // Set the width to 50% of the viewport width
      h="100vh"
      bgColor="brand.white"
      id="about-section"
    >
      <Box
        w="45vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        bg="brand.white"
        position="relative"
        id="projects-section"
      >
        <VStack align="flex-start">
          {/* <PageTitle titleName="Résumé" color="brand.green" /> */}
          <SectionTitle
            titleName="Projects"
            rightAlign={false}
            color="brand.blue"
          />
          <Reveal>
            <VStack align="flex-start" spacing={4}>
              <ExperienceSection
                experiences={experiences}
                maxHighlightWidth="60vw"
              />
              <EducationSection
                educations={educations}
                maxHighlightWidth="60vw"
              />
            </VStack>
          </Reveal>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProjectPage;
