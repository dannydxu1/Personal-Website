import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import {
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiPython,
  SiMicrosoftsqlserver,
  SiSwift,
  SiAzuredevops,
  SiPowerbi,
  SiUbuntu,
  SiGit,
  SiPostman,
} from "@icons-pack/react-simple-icons";

import Reveal from "../globals/Reveal";

const Skills = () => {
  const color = useColorModeValue("black", "white");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  if (isMobile) return <Box />;

  return (
    <Reveal>
      <Box mt="2vh" mb="5vh">
        <VStack>
          <Text fontWeight="bold" fontSize="2xl">
            Skills
          </Text>
          <HStack>
            <SiReact color={color} size={28} />
            <SiTypescript color={color} size={28} />
            <SiNextdotjs color={color} size={28} />
            <SiChakraui color={color} size={28} />
            <SiDotnet color={color} size={28} />
            <SiJavascript color={color} size={28} />
            <SiHtml5 color={color} size={28} />
            <SiCss3 color={color} size={28} />
            <SiPython color={color} size={28} />
            <SiMicrosoftsqlserver color={color} size={28} />
            <SiSwift color={color} size={28} />
            <SiAzuredevops color={color} size={28} />
            <SiPowerbi color={color} size={28} />
            <SiUbuntu color={color} size={28} />
            <SiGit color={color} size={28} />
            <SiPostman color={color} size={28} />
          </HStack>
        </VStack>
      </Box>
    </Reveal>
  );
};

export default Skills;
