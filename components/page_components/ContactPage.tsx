import {
  Box,
  Button,
  Link,
  Text,
  VStack,
  HStack,
  Center,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon } from "@chakra-ui/icons";

import Reveal from "../globals/Reveal";

const ContactPage = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      w="100vw"
      h="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="brand.white"
      position="relative"
      id="contact-section"
      zIndex="1"
    >
      <Box
        w="45vw"
        h="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="brand.white"
        position="relative"
        id="contact-section"
        zIndex="0"
      >
        <VStack spacing={4}>
          <HStack zIndex="0">
            <Text
              fontWeight="extrabold"
              fontFamily="anybodyVariable"
              fontSize="6xl"
              textAlign="center"
              mx={2}
              ml={0}
              color="black"
            >
              Contact
            </Text>
            <Text
              color="brand.purple"
              fontFamily="anybodyVariable"
              fontWeight="extrabold"
              fontSize="6xl"
              ml={-2}
            >
              .
            </Text>
          </HStack>
          <Reveal>
            <VStack spacing={4}>
              <Text
                color="black"
                fontFamily="interVariable"
                fontWeight="normal"
                fontSize="xl"
                textAlign="center"
              >
                Hello 👋, Danny here! To get in contact,{" "}
                <Link href="mailto:dannydxu1@gmail.com" isExternal>
                  email{" "}
                </Link>
                me, or{" "}
                <Link href="https://www.linkedin.com/in/dannydxu1/" isExternal>
                  connect{" "}
                </Link>
                on LinkedIn!
              </Text>
              <HStack>
                <Icon as={EmailIcon} boxSize={6} color="brand.black" />
                <Text
                  fontWeight="bold"
                  color="black"
                  fontFamily="interVariable"
                >
                  <Link href="mailto:dannydxu1@gmail.com" isExternal>
                    dannydxu1@gmail.com
                  </Link>
                </Text>
              </HStack>
            </VStack>
          </Reveal>
        </VStack>
      </Box>
      <Button
        onClick={handleScrollTop}
        position="absolute"
        bottom="0"
        right="0"
        p="40px"
        color="black"
        fontFamily="anybodyVariable"
        fontWeight="bold"
        fontSize="30"
        zIndex="1"
        backgroundColor="transparent"
        _hover={{ cursor: "pointer" }}
      >
        ⇡
      </Button>
    </Box>
  );
};

export default ContactPage;
