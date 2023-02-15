import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
    },
    gray: {
      "900": "#000000",
      "800": "#47585B",
      "700": "#999999",
      "200": "#DADADA",
      "100": "#F5F8FA",
      "50": "#FFFFFF",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
  fonts: {
    heading: `'Poppins'`,
    body: `'Poppins'`,
  },
});
