import React from "react";
import { Box, Image, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { ExperienceCardProps } from "@/interfaces";

// The ExperienceCard component
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  companyUrl,
  bgColor,
  position,
  duration,
  location,
  logoUrl,
}) => {
  return (
    <HStack
      spacing={4}
      p={4}
      boxShadow="md"
      borderRadius="lg"
      align="center"
      bg="white"
    >
      <Box
        boxSize="130px"
        rounded="md"
        overflow="hidden"
        bg={bgColor}
        p={2}
        display="flex" // Make the Box a flex container
        alignItems="center" // Center vertically
        justifyContent="center" // Center horizontally
      >
        <Image src={logoUrl} alt={`${companyName} logo`} />
      </Box>
      <VStack align="start" spacing={1}>
        <Link isExternal href={companyUrl}>
          <Text fontWeight="bold" fontSize="xl">
            {companyName}
          </Text>
        </Link>
        <Text fontSize="md">{position}</Text>
        <Text fontSize="md" color="gray.600">
          {duration}
        </Text>
        <Text fontSize="md" color="gray.500">
          {location}
        </Text>
      </VStack>
    </HStack>
  );
};

export default ExperienceCard;
