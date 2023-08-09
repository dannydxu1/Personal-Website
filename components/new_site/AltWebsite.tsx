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
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import React, { useState, useEffect } from "react";

import Header from "./Header";
import Reveal from "../globals/Reveal";
import PageStepper from "./PageStepper";
import ProjectView from "./ProjectView";
import TypedIntro from "./TypedIntro";
import Skills from "./Skills";
import "../../styles/altwebsite.css";

const AltWebsite = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  const screenWidth = isMobile ? "80vw" : "60vw";
  const pictureSize = isMobile ? "150px" : "200px";
  const iconColor = useColorModeValue("black", "white");
  const locationColor = useColorModeValue("#d91f07", "#ff1500");
  const footerColor = useColorModeValue("gray.600", "dracula_primary_blurple");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.4)"
  );

  return (
    <Box minH="100vh" pt="1vh">
      <Flex flexDirection="column" alignItems="center">
        <Box w={screenWidth} mb="1vh">
          <Header />
        </Box>
        <Reveal>
          <VStack>
            <HStack spacing={5}>
              <Box boxSize={pictureSize}>
                <Image
                  src="/LinkedInPhoto.jpeg"
                  alt="A dashing young man"
                  boxSize={pictureSize}
                  borderRadius="full"
                  objectFit="cover"
                  boxShadow={`0px 10px 20px -10px ${boxShadowColor}`}
                />
              </Box>
              {isMobile ? (
                <Box></Box>
              ) : (
                <VStack align="start" spacing={2}>
                  <HStack spacing={2}>
                    <Icon as={FaBriefcase} boxSize={5} color={iconColor} />
                    <Text fontWeight="medium">
                      Software Engineer - Full Stack Developer
                    </Text>
                  </HStack>{" "}
                  <HStack spacing={2}>
                    <Icon as={MdEmail} boxSize={5} color={iconColor} />
                    <Text fontWeight="medium">dd(dot)xu(at)wisc(dot)edu</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon
                      as={FaLocationDot}
                      boxSize={5}
                      color={locationColor}
                    />
                    <Text fontWeight="medium">San Jose, California</Text>
                  </HStack>
                </VStack>
              )}
            </HStack>
            <TypedIntro />
          </VStack>
        </Reveal>
        <Box w={screenWidth} mt="4vh">
          <Text>
            I am a 2nd year{" "}
            <Text as="span" fontWeight="bold">
              Computer Science & Mathematics
            </Text>{" "}
            student at the{" "}
            <Text as="span" fontWeight="bold">
              University of Wisconsin—Madison
            </Text>{" "}
            and currently doing a co-op as a software engineer at{" "}
            <Text as="span" fontWeight="bold">
              CommScope
            </Text>
            . I&apos;m working in the Fiber Test Lab, building internal
            applications to support data retrieval and analysis.
            <br />
            <br />I was previously a communications researcher at the{" "}
            <Text as="span" fontWeight="bold">
              Small Satellite Research Laboratory
            </Text>
            . I am proficient in React, Next.js, and ASP.NET MVC applications.
            In my free time, I am actively pursuing knowledge in{" "}
            <Text as="span" fontWeight="bold">
              deep learning
            </Text>
            . I am currently seeking{" "}
            <Text as="span" fontWeight="bold">
              Summer 2024
            </Text>{" "}
            internships.
            <br />
          </Text>
          <br />
        </Box>
        <Skills />
        <Text fontSize="md" color={footerColor}>
          Made with ❤️ by Danny Xu.
        </Text>
        <Text fontSize="md" color={footerColor} mb="4vh">
          Last update: July 2023
        </Text>
      </Flex>
    </Box>
  );
};

export default AltWebsite;
