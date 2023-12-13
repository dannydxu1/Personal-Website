import React, { useEffect } from "react";
import {
  Box,
  Image,
  Button,
  HStack,
  VStack,
  Heading,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" mt="10vh">
      <HStack spacing={0} justifyContent="center" alignItems="center">
        <VStack spacing={4} alignItems="flex-start" maxW="45%">
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            Hi, I&apos;m Danny! 👋
          </Heading>
          <Text fontSize="xl" fontWeight="semibold">
            Software Engineer
          </Text>
          <Text fontSize="md" color="gray.600">
            Junior pursuing an undergraduate Computer Science and Mathematics
            degree at the University of Wisconsin-Madison.
          </Text>
          <Link href="#contact">
            <Button
              rightIcon={<MdEmail />}
              colorScheme="blackAlpha"
              variant="solid"
              boxShadow="md"
            >
              Say Hello
            </Button>
          </Link>
        </VStack>
        <Box
          borderRadius="full"
          overflow="hidden"
          boxSize="200px"
          boxShadow="lg"
        >
          <Image src="/dx.jpeg" alt="Danny Xu" />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Profile;
