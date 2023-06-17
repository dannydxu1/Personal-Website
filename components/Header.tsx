import { Box, Icon, IconButton, useStyleConfig } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { Home } from "@mui/icons-material";
import React from "react";


const Header = () => {
  const styles = useStyleConfig("IconButton", { variant: "gradient" });

  //   const iconStyles = {
  //     color: "white",
  //     transition: "color 0.3s ease-in-out",
  //   };

  //   const handleHover = (event) => {
  //     event.target.style.color = "red";
  //   };

  //   const handleMouseLeave = (event) => {
  //     event.target.style.color = "blue";
  //   };

  return (
    <Box
      as="header"
      w="100%"
      h="60px"
      bg="gray"
      color="white"
      position="fixed"
      top="0"
      left="0"
      zIndex="999"
    >
      Header Menu
      <IconButton
        icon={<AiOutlineHome />}
        aria-label="Home"
        size="lg"
        sx={styles}
        // onMouseEnter={handleHover}
        // onMouseLeave={handleMouseLeave}
      />
    </Box>
  );
};

export default Header;
