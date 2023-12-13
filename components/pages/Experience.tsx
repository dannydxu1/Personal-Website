import {
  Box,
  Center,
  VStack,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import React from "react";

import ExperienceTimeline from "@/components/ExperienceTimeline";
const Experience = () => {
  const experiences = [
    {
      companyName: "Boston Scientific",
      companyUrl: "https://www.bostonscientific.com/en-US/Home.html",
      bgColor: "#ffffff",
      position: "Software Engineer Intern",
      duration: "Incoming Summer 2024",
      location: "Arden Hills, MN",
      logoUrl: "/bsc.svg",
    },
    {
      companyName: "IDiA Research Lab",
      companyUrl: "https://idia.labs.wisc.edu/",
      bgColor: "#ffffff",
      position: "Research Assistant",
      duration: "Oct 2023 - Present",
      location: "Madison, WI",
      logoUrl: "/uw_medical.png",
    },
    {
      companyName: "CommScope",
      companyUrl: "https://www.commscope.com/",
      bgColor: "#ffffff",
      position: "Software Engineer",
      duration: "Aug 2023 - Present",
      location: "Remote",
      logoUrl: "/cs.jpeg",
    },
    {
      companyName: "CommScope",
      companyUrl: "https://www.commscope.com/",
      bgColor: "#ffffff",
      position: "Software Engineer Intern",
      duration: "May 2023 - Aug 2023",
      location: "Shakopee, MN",
      logoUrl: "/cs.jpeg",
    },

    {
      companyName: "SmallSat Research Lab",
      companyUrl: "https://smallsat.umn.edu/",
      bgColor: "#ffffff",
      position: "Research Assistant",
      duration: "Nov 2022 - May 2023",
      location: "Minneapolis, MN",
      logoUrl: "/umn-aerospace.png",
    },
  ];
  return (
    <Container maxW="container.xl" mt="10vh">
      <VStack align="stretch">
        <Box py={10}>
          <Center>
            <VStack>
              <Heading as="h1" size="2xl" fontWeight="extrabold">
                Experience
              </Heading>
              <Text color="gray.600"> Work & Research</Text>
            </VStack>
          </Center>
        </Box>
        <Center>
          <Box maxW="40%">
            <ExperienceTimeline experiences={experiences} />
          </Box>
        </Center>
      </VStack>
    </Container>
  );
};

export default Experience;
