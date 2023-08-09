import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/anybody";
import "@fontsource-variable/inter";
import "@fontsource-variable/caveat";
import "@fontsource-variable/roboto-mono";

const theme = extendTheme({
  fonts: {
    heading: `'Inter Variable', sans-serif`,
    body: `'Inter Variable', sans-serif`,
    anybodyVariable: "Anybody Variable",
    interVariable: "Inter Variable",
    caveatVariable: "Caveat Variable",
  },
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
  colors: {
    brand: {
      red: "#ff9f96",
      orange: "#FFC3A0",
      yellow: "#f7f740",
      green: "#A2E8B1",
      green_dark: "#8ac296",
      blue: "#78DCF0",
      purple: "#B19CD9",
      pink: "#FFB8D1",
      white: "#EFEFF0",
    },
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
});
