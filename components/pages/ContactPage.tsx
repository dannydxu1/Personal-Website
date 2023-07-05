import React from "react";
import {
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Center,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

import Reveal from "../globals/Reveal";
import SectionTitle from "../globals/SectionTitle";

const ContactPage = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxHeight = isMobile ? "80vh" : "50vh";
  return (
    <Center minH="80vh" bg="brand.white">
      <Box
        // minH={isMobile ? "50vh" : "5vh"}
        h={boxHeight}
        bg="brand.white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        id="contact-section"
        zIndex="1"
      >
        <Box
          w={{ base: "100vw", md: "45vw" }}
          maxW="800px"
          p={4}
          id="contact-box"
        >
          <VStack spacing={4} align="center" w="100%">
            <SectionTitle
              titleName="Contact"
              rightAlign={false}
              color="brand.purple"
            />
            <Reveal>
              <VStack spacing={4} align="center" w="100%">
                <Text
                  color="black"
                  fontFamily="interVariable"
                  fontWeight="normal"
                  fontSize="xl"
                  textAlign="center"
                >
                  Hello 👋, Danny here! To get in contact,{" "}
                  <Link
                    href="mailto:dannydxu1@gmail.com"
                    isExternal
                    textDecoration="underline"
                  >
                    email
                  </Link>{" "}
                  me, or connect on{" "}
                  <Link
                    href="https://www.linkedin.com/in/dannydxu1/"
                    isExternal
                    textDecoration="underline"
                  >
                    Linkedin
                  </Link>
                  .
                </Text>
                <HStack spacing={2} alignItems="center">
                  <Icon as={EmailIcon} boxSize={6} color="brand.black" />
                  <Text
                    fontWeight="bold"
                    color="black"
                    fontFamily="interVariable"
                  >
                    <Link
                      href="mailto:dannydxu1@gmail.com"
                      isExternal
                      textDecoration="underline"
                    >
                      dannydxu1@gmail.com
                    </Link>
                  </Text>
                </HStack>
              </VStack>
            </Reveal>
          </VStack>
        </Box>
        <Box position="absolute" bottom={4} right={4} zIndex="1">
          <Button
            onClick={handleScrollTop}
            p="2"
            color="black"
            fontFamily="anybodyVariable"
            fontWeight="bold"
            fontSize="24"
            backgroundColor="transparent"
            _hover={{ cursor: "pointer" }}
          >
            ⇡
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default ContactPage;
