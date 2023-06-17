import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    IconButton: {
      variants: {
        gradient: {
          bgGradient: "linear(to-r, teal.500, cyan.500)",
          bgClip: "text",
          _hover: {
            bgGradient: "linear(to-r, teal.300, cyan.300)",
          },
        },
      },
    },
  },
});

export default theme;
