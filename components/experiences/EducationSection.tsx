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
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  return (
    <Box>
      {educations.map((education) => (
        <Box
          key={education.id}
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
              {education.institution}
            </Heading>
            <Text>{education.duration}</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Text mb={1}>{education.degreeTitle}</Text>
            <Text>{education.location}</Text>
          </Box>
          <UnorderedList>
            {education.highlights.map((highlight, index) => (
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

export default EducationSection;
