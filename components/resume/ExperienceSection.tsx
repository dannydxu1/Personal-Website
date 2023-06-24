import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
  skills: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
  maxHighlightWidth: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  maxHighlightWidth,
}) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Experience
      </Heading>
      {experiences.map((experience) => (
        <Box key={experience.id} mb={4} display="flex" flexDirection="column">
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
            <Text color="gray.500" mb={1}>
              {experience.company}
            </Text>
            <Text color="gray.500">{experience.location}</Text>
          </Box>
          <UnorderedList>
            {experience.highlights.map((highlight, index) => (
              <ListItem
                key={index}
                maxWidth={maxHighlightWidth}
                wordBreak="break-word"
              >
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
