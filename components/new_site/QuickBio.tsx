import {
  Text,
  VStack,
  useColorModeValue,
  Box,
  Image,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Reveal from "../globals/Reveal";
import TypedIntro from "./TypedIntro";

interface BodyProps {
  isMobile: boolean;
}

const QuickBio: React.FC<BodyProps> = ({ isMobile }) => {
  const pictureSize = isMobile ? "150px" : "200px";
  const iconColor = useColorModeValue("black", "white");
  const locationColor = useColorModeValue("#d91f07", "#ff1500");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.4)"
  );

  const footerColor = useColorModeValue("gray.600", "#dedede");

  return (
    <Reveal>
      <VStack>
        <HStack spacing={5}>
          <Box boxSize={pictureSize}>
            <Image
              src="/LinkedInPhoto.jpeg"
              alt="A dashing young man"
              boxSize={pictureSize}
              borderRadius="full"
              objectFit="cover"
              boxShadow={`0px 10px 20px -10px ${boxShadowColor}`}
            />
          </Box>
          {isMobile ? (
            <Box></Box>
          ) : (
            <VStack align="start" spacing={2}>
              <HStack spacing={2}>
                <Icon as={FaBriefcase} boxSize={5} color={iconColor} />
                <Text fontWeight="medium">
                  Software Engineer - Full Stack Developer
                </Text>
              </HStack>{" "}
              <HStack spacing={2}>
                <Icon as={MdEmail} boxSize={5} color={iconColor} />
                <Text fontWeight="medium">dd(dot)xu(at)wisc(dot)edu</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaLocationDot} boxSize={5} color={locationColor} />
                <Text fontWeight="medium">San Jose, California</Text>
              </HStack>
            </VStack>
          )}
        </HStack>
        <TypedIntro />
      </VStack>
    </Reveal>
  );
};

export default QuickBio;
