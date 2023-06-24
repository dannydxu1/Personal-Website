import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface Education {
  id: number;
  degreeTitle: string;
  institution: string;
  location: string;
  duration: string;
  highlights: string[];
}

interface EducationSectionProps {
  educations: Education[];
  maxHighlightWidth: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  educations,
  maxHighlightWidth,
}) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Education
      </Heading>
      {educations.map((education) => (
        <Box key={education.id} mb={4} display="flex" flexDirection="column">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Heading as="h3" size="md" mb={2}>
              {education.degreeTitle}
            </Heading>
            <Text color="gray.500">{education.duration}</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Text color="gray.500" mb={1}>
              {education.institution}
            </Text>
            <Text color="gray.500">{education.location}</Text>
          </Box>
          <UnorderedList>
            {education.highlights.map((highlight, index) => (
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

export default EducationSection;
