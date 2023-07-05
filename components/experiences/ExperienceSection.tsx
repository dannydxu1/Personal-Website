import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <Box>
      {experiences.map((experience) => (
        <Box
          key={experience.id}
          mb={4}
          display="flex"
          flexDirection="column"
          minHeight={{ base: "150px", md: "auto" }} // Adjust the minHeight value as per your needs
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Heading as="h3" size="md" mb={2}>
              {experience.title}
            </Heading>
            <Text color="gray.500">{experience.duration}</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Text mb={1}>
              {experience.company}
            </Text>
            <Text color="gray.500">{experience.location}</Text>
          </Box>
          <UnorderedList>
            {experience.highlights.map((highlight, index) => (
              <ListItem key={index} wordBreak="break-word" m={1}>
                {highlight}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceSection;
