import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface Project {
  id: number;
  title: string;
  duration: string;
  highlights: string[];
  skills: string[];
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <Box>
      {projects.map((project) => (
        <Box
          key={project.id}
          mb={4}
          display="flex"
          flexDirection="column"
        
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Heading as="h3" size="md" mb={2}>
              {project.title}
            </Heading>
            <Text>{project.duration}</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          ></Box>
          <UnorderedList>
            {project.highlights.map((highlight, index) => (
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

export default ProjectSection;
