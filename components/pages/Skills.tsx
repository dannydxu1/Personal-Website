import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdEmail, MdSend } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.700"); // Change color based on the theme

  return (
    <Box py={16} px={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Contact options */}
        <VStack spacing={4} alignItems="flex-start">
          <Heading size="lg">Get in touch</Heading>
          <Text fontSize="md">Any questions? Contact me</Text>

          <ContactOption
            icon={MdEmail}
            label="Email"
            detail="hi@iamstuti.com"
          />
          <ContactOption icon={FaLinkedin} label="LinkedIn" detail="iamstuti" />
          <ContactOption icon={FaGithub} label="Github" detail="iamstutishah" />
        </VStack>

        {/* Contact form */}
        <VStack spacing={4} alignItems="flex-start">
          <Input placeholder="Enter your name" variant="filled" />
          <Input placeholder="Enter your email/phone" variant="filled" />
          <Textarea placeholder="Enter your message" variant="filled" />
          <Button
            rightIcon={<Icon as={MdSend} />}
            colorScheme="blackAlpha"
            boxShadow="md"
          >
            Send Message
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

const ContactOption = ({ icon, label, detail }) => (
  <HStack
    w="full"
    p={4}
    bg={useColorModeValue("white", "gray.600")}
    boxShadow="base"
    borderRadius="md"
    spacing={3}
    alignItems="center"
  >
    <Icon as={icon} boxSize={6} />
    <VStack align="flex-start" spacing={0}>
      <Text fontWeight="semibold">{label}</Text>
      <Text fontSize="sm">{detail}</Text>
    </VStack>
  </HStack>
);

export default Contact;
