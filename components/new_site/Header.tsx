import {
  Box,
  Flex,
  Link,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

import ColorToggle from "./ColorToggle";

const Header = () => {
  const iconColor = useColorModeValue("black", "white"); // Choose appropriate colors for light and dark modes

  return (
    <Box as="header" bg="transparent" py={4}>
      <Flex justify="space-between" align="center" mx={4}>
        <Link href="https://ddxu.studio">
          <Text
            fontFamily="anybodyVariable"
            fontWeight="extrabold"
            fontSize="5xl"
          >
            DX
          </Text>
        </Link>
        <Flex align="center">
          {/* <Box mr={2}>
            <ColorToggle />
          </Box> */}
          <Link href="https://github.com/dannydxu1" isExternal>
            <IconButton
              as={FaGithub}
              aria-label="GitHub"
              variant="ghost"
              color={iconColor}
              fontSize="8px"
              transform="scale(0.8)"
              mr={2}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ddxu/" isExternal>
            <IconButton
              as={FaLinkedin}
              aria-label="LinkedIn"
              variant="ghost"
              color={iconColor}
              fontSize="8px"
              transform="scale(0.8)"
              mr={2}
            />
          </Link>
          <Link href="https://ddxu.studio/resume" isExternal>
            <IconButton
              as={FaFileAlt} // Use the FaFileAlt icon for the resume link
              aria-label="Resume"
              variant="ghost"
              color={iconColor}
              fontSize="8px"
              transform="scale(0.7)"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
