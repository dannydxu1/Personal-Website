import { Box, Center, VStack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

import Reveal from "../globals/Reveal";
import AboutMeDescription from "../about/AboutMeDescription";
import SectionTitle from "../globals/SectionTitle";

const AboutPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxHeight = isMobile ? "60vh" : "50vh";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h={boxHeight}
      bgColor="brand.white"
      id="about-section"
    >
      <Box
        w={{ base: "100vw", md: "45vw" }}
        h={boxHeight}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        bg="brand.white"
        position="relative"
      >
        <VStack align="flex-start" maxW="800px" p={isMobile ? 4 : 8}>
          <SectionTitle
            titleName="About"
            rightAlign={false}
            color="brand.red"
          />
          <Reveal>
            <VStack align="flex-start" spacing={4}>
              <AboutMeDescription />
              <Text
                color="black"
                fontFamily="anybodyVariable"
                fontWeight="normal"
                fontSize={{ base: "sm", md: "xl" }}
              >
                Software Engineer Co-Op &nbsp;@
                <Text as="u" fontWeight="bold">
                  CommScope Fiber Lab
                </Text>
                . <br />
                CS + Math undergrad @
                <Text as="u" fontWeight="bold">
                  University of Wisconsin-Madison
                </Text>
                . <br />
                Previously Communications Researcher &nbsp;@
                <Text as="u" fontWeight="bold">
                  UMN SmallSatellite Lab
                </Text>
                . <br />
                ---
                <br />
                When I&apos;m not at my computer, you can find me at the gym or
                playing badminton.
              </Text>
            </VStack>
          </Reveal>
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutPage;
