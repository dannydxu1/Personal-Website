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
          I am a 2nd Year{" "}
          <Text as="span" fontWeight="bold">
            Computer Science & Math
          </Text>{" "}
          student at UW-Madison and a{" "}
          <Text as="span" fontWeight="bold">
            Software Engineer
          </Text>{" "}
          at CommScope, where I build apps for data
          retrieval and analysis. Additionally, I am an{" "}
          <Text as="span" fontWeight="bold">
            undergraduate researcher
          </Text>{" "}
          at the UW-Madison IDiA Laboratory where I apply deep learning to neuroinformatics.
          <br />
          <br />I was previously a communications researcher at the{" "}
          <Text as="span" fontWeight="bold">
            Small Satellite Research Lab
          </Text>{" "}
          and a Software Engineer Intern at{" "}
          <Text as="span" fontWeight="bold">
            CommScope
          </Text>
          . I am proficient in React, Next.js, and ASP.NET MVC applications. In
          my free time, I am actively pursuing knowledge in{" "}
          <Text as="span" fontWeight="bold">
            deep learning.
          </Text>
          <br />
        </Text>
        <br />
      </Box>
    </Reveal>
  );
};

export default Body;
