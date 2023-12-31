// import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

//   custom theme for this appliacation
const theme = createTheme({
  palette: {
    tickTie: {
      main: "#292929",
      light: "#ffffff",
      dark: "#000000",
      lightText: "#ffffff",
      darkText: "#000000",
      mainText: "#292929",
    },
    secondary: {
      main: "#292929",
      contrastText: "#fff",
    },

    // primary: {},
    // secondary: {
    // main: "#292929",
    // light: "#ffffff",
    // dark: "#292929",
    // },
    // secondary: {
    //   main: "#19857b",
    // },
    // error: {
    //   main: red.A400,
    // },
  },
  typography: {
    // fontSize: 16,
    // h1: {
    //   fontSize: "2.5rem",
    // },
    // h2: {
    //   fontSize: "2rem",
    // },
    // h3: {
    //   fontSize: "1.75rem",
    // },
  },
  // spacing: 8,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
