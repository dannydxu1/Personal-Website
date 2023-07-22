import { Box, Flex, Link, IconButton, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
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
        <Flex>
          <Link href="https://github.com/dannydxu1" isExternal>
            <IconButton
              as={FaGithub}
              aria-label="GitHub"
              variant="ghost"
              color="black"
              fontSize="8px"
              transform="scale(0.8)"
              mr={4}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/dannydxu1/" isExternal>
            <IconButton
              as={FaLinkedin}
              aria-label="LinkedIn"
              variant="ghost"
              color="black"
              fontSize="8px"
              transform="scale(0.8)"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
