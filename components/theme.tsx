import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/anybody";
import "@fontsource-variable/inter";
import "@fontsource-variable/caveat";
import "@fontsource-variable/roboto-mono";

const theme = extendTheme({
  fonts: {
    body: "Inter Variable, sans-serif",
    heading: "Inter Variable, sans-serif",
    anybodyVariable: "Anybody Variable",
  },
  colors: {
    dracula_accent_pink: "#ce80b3",
    dracula_accent_cyan: "#85eaf5",
    dracula_accent_green: "#63e88f",
    dracula_accent_yellow: "#eaf792",
    dracula_primary_purple_light: "#bd93f9",
    dracula_primary_purple_dark: "#282a36",
    dracula_primary_blurple: "#6372aa",
  },

  components: {
    Text: {
      baseStyle: {
        fontSize: "20px",
      },
    },
    Heading: {
      baseStyle: {
        fontSize: "30px",
      },
    },
  },
});

export default theme;

