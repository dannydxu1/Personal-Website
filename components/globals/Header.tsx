import { HStack, Icon, Link } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaUser,
  FaUserTie,
  FaList,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState("");

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem("");
  };

  const handleScrollSection = (section: string) => {
    const sectionID = section.toLowerCase() + "-section";
    const sectionSelector = document.getElementById(sectionID);
    if (sectionSelector) {
      sectionSelector.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { name: "About", icon: FaUser },
    { name: "Experience", icon: FaUserTie },
    { name: "Projects", icon: FaList },
    { name: "Contact", icon: FaEnvelope },
  ];

  return (
    <HStack
      position="fixed"
      top="0"
      left="0"
      height="6vh" // Adjust the height as needed
      justifyContent="flex-start"
      alignItems="center"
      zIndex="1"
      bgColor="brand.white"
      ml={2}
    >
      {sections.map(({ name, icon: IconComponent }) => (
        <Link
          key={name}
          onClick={() => handleScrollSection(name)}
          color={hoveredItem === name ? "brand.purple" : "black"}
          _hover={{ color: "brand.blue" }}
          p="1"
          bg="transparent" // Make the background transparent
        >
          <Icon as={IconComponent} boxSize="6" />
        </Link>
      ))}

      <Link href="https://www.linkedin.com/in/dannydxu1/" isExternal>
        <Icon
          as={FaLinkedin}
          boxSize="8"
          color={hoveredItem === "LinkedIn" ? "brand.purple" : "black"}
          _hover={{ color: "brand.blue" }}
          p="1"
        />
      </Link>

      <Link href="https://github.com/dannydxu1" isExternal>
        <Icon
          as={FaGithub}
          boxSize="8"
          color={hoveredItem === "GitHub" ? "brand.purple" : "black"}
          _hover={{ color: "brand.blue" }}
          p="1"
        />
      </Link>
    </HStack>
  );
};

export default Header;
