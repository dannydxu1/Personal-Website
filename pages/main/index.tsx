import { Box, Center, VStack } from "@chakra-ui/react";
import React from "react";

import Reveal from "@/components/Reveal";
import Profile from "@/components/pages/Profile";
import Experience from "@/components/pages/Experience";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/Footer";
const Portfolio = () => {
  return (
    <Center>
      <Reveal>
        <VStack>
          <Profile />
          <Experience />
          <Contact />
          <Footer />
        </VStack>
      </Reveal>
    </Center>
  );
};

export default Portfolio;
