import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/anybody";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#fafafa",
      },
    },
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
