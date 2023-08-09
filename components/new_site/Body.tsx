import { Text, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Reveal from "../globals/Reveal";

interface BodyProps {
  isMobile: boolean;
}

const Body: React.FC<BodyProps> = ({ isMobile }) => {
  const footerColor = useColorModeValue("gray.600", "#dedede");
  const screenWidth = isMobile ? "80vw" : "60vw";

  return (
    <Reveal>
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
          . I am proficient in React, Next.js, and ASP.NET MVC applications. In
          my free time, I am actively pursuing knowledge in{" "}
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
    </Reveal>
  );
};

export default Body;
