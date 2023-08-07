import React from "react";
import {
  Box,
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiReact } from "@icons-pack/react-simple-icons";

const Skills = () => {
  return (
    <Box className="marquee-text" w="25vw">
      <SiReact color="default" size={24} />
    </Box>
  );
};

export default Skills;
