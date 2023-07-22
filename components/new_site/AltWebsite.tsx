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
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";

import Header from "./Header";
import Reveal from "../globals/Reveal";

const AltWebsite = () => {
  return (
    <Box minH="100vh" pt="15vh">
      <Flex flexDirection="column" alignItems="center">
        <Box w="70vw" mb="1vh">
          <Header />
        </Box>
        <Reveal>
          <Box boxSize="200px">
            <Image
              src="/LinkedInPhoto.jpeg"
              alt="A dashing young man"
              boxSize="200px"
              borderRadius="full"
              objectFit="cover"
            />
          </Box>
        </Reveal>
        <Reveal>
          <Text mt={4} fontWeight="bold" fontSize="3xl">
            👋 Hey, I&apos;m Danny
          </Text>
        </Reveal>
        <Box w="70vw" mt="4vh">
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
            <br />I am driven by curiosity, thrive in collaborative
            environments, and seek opportunities for personal and professional
            growth. My passion lies in leveraging software to tackle novel
            challenges.
          </Text>
          <br />
        </Box>
        <Text fontSize="md" color="gray.600" mb="4vh">
          Last Updated: July 2023
        </Text>
      </Flex>
    </Box>
  );
};

export default AltWebsite;
