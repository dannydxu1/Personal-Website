import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdEmail, MdSend } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactOptionProps {
  icon: React.ElementType;
  label: string;
  detail: string;
  url: string;
}

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.700"); // Change color based on the theme

  return (
    <Box py={16} px={8} maxW="60%" mt="10vh" id="contact">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Contact options */}
        <VStack spacing={4} alignItems="flex-start">
          <ContactOption
            icon={MdEmail}
            label="Email"
            detail="ddxu(at)wisc.edu"
            url="mailto:ddxu@wisc.edu"
          />
          <ContactOption
            icon={FaLinkedin}
            label="LinkedIn"
            detail="ddxu"
            url="https://www.linkedin.com/in/ddxu/"
          />
          <ContactOption
            icon={FaGithub}
            label="Github"
            detail="dannydxu1"
            url="https://www.linkedin.com/in/ddxu/"
          />
        </VStack>

        <VStack spacing={4} alignItems="flex-start">
          <Heading size="lg">Reach Out</Heading>
          <Text fontSize="md">
            Please contact me for any job opportunities, projects, or questions!
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

const ContactOption: React.FC<ContactOptionProps> = ({
  icon,
  label,
  detail,
  url,
}) => (
  <Link href={url} isExternal w="full">
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
  </Link>
);

export default Contact;
