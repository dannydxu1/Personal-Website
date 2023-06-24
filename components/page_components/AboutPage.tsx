import {
  Box,
  Center,
  Text,
  HStack,
  VStack,
  Heading,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import AboutMeDescription from "../about/AboutMeDescription";
import SectionTitle from "../globals/SectionTitle";
import Reveal from "../globals/Reveal";

const AboutPage = () => {
  const gradient =
    "linear-gradient(45deg, #ffc3a0, #b19cd9, #78dcf0, #b19cd9, #ffc3a0)";
  const allSkills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "C#",
    "C",
    "Python",
    "Java",
    "Swift",
    "React",
    "Next.js",
    "ASP.NET",
    "Entity Framework Core",
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw" // Set the width to 50% of the viewport width
      h="65vh"
      bgColor="brand.white"
      id="about-section"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="45vw" // Set the width to 50% of the viewport width
        h="30vh"
        bgColor="brand.white"
        id="about-section"
      >
        <VStack align="flex-start">
          {/* <PageTitle titleName="About" color="brand.orange" /> */}
          <SectionTitle
            titleName="About"
            rightAlign={false}
            color="brand.orange"
          />
          <Reveal>
            <AboutMeDescription />
          </Reveal>
          <Reveal>
            <VStack align="flex-start" spacing={4}>
              <Text
                color="black"
                fontFamily="anybodyVariable"
                fontWeight="normal"
                fontSize={"xl"}
              >
                Software Engineer Co-Op &nbsp;@
                <Text as="u" fontWeight="bold">
                  CommScope Fiber Lab
                </Text>
                . <br />
                CS + Math undergrad @
                <Text as="u" fontWeight="bold">
                  University of Wisconsin-Madison
                </Text>
                . <br />
                Previously Communications Researcher &nbsp;@
                <Text as="u" fontWeight="bold">
                  UMN SmallSatellite Lab
                </Text>
                . <br />
                {/* {isClient && (
                  <HStack>
                    {allSkills.map((skill, index) => (
                      <Skill key={index} skill={skill} />
                    ))}
                  </HStack>
                )} */}
                ---
                <br />
                When I&apos;m not at my computer, you can at the gym or playing
                badminton.
              </Text>
            </VStack>
          </Reveal>
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutPage;
