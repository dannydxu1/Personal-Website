import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import ExperienceCard  from "./ExperienceCard";
import { ExperienceCardProps } from "@/interfaces";

interface ExperienceTimelineProps {
  experiences: ExperienceCardProps[]; // Array of experience card props
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <VStack align="stretch" position="relative" spacing={8} >
      {/* Vertical line */}
      <Box
        position="absolute"
        left="50%"
        top="0"
        bottom="0"
        width="2px"
        bg="gray.500"
        zIndex="0"
      />
      {experiences.map((exp, index) => (
        <Box key={index} position="relative" zIndex="1" >
          <ExperienceCard {...exp} />
        </Box>
      ))}
    </VStack>
  );
};

export default ExperienceTimeline;
