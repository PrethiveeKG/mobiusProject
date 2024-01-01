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
      success: "#00CB34",
      error: "#F74646",
      lightBackground: "#ffffff30",
    },
    // primary: {},
    secondary: {
      main: "#292929",
      contrastText: "#fff",
    },

    // secondary: {
    // main: "#87654",
    // light: "#00000",
    // dark: "#09876",
    // },
    // error: {
    //   main: red.A400,
    // },
  },
  typography: {
    fontSize: 16,
    // h1: {
    //   fontSize: "2.5rem",
    // },
    // h2: {
    //   fontSize: "2rem",
    // },
    // h3: {
    //   fontSize: "1.75rem",
    // },
    h5: {
      fontSize: "1rem",
      color: "#292929",
      fontWeight: 500,
    },
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
