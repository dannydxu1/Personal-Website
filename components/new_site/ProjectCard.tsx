import { Box, chakra, Image, Flex, Link } from "@chakra-ui/react";
import React from "react";

import Reveal from "../globals/Reveal";
import "../../styles/altwebsite.css";

interface Project {
  imageSrc: string;
  headline: string;
  skills: string[];
  description: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box mx="auto" rounded="lg" shadow="md" bg="white" maxW="xl">
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={project.imageSrc}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{
                color: "brand.400",
              }}
            >
              {project.skills.join(", ")}
            </chakra.span>
            <Link
              display="block"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{
                color: "gray.600",
                textDecor: "underline",
              }}
            >
              {project.headline}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {project.description}
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
