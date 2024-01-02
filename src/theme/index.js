import { createTheme } from "@mui/material/styles";
import { red, grey, green } from "@mui/material/colors";
//   custom theme for this appliacation
const theme = createTheme({
  palette: {
    tickTie: {
      main: grey[800],
      light: "#fff",
      dark: grey[900],
      lightText: "#fff",
      darkText: grey[900],
      mainText: grey[900],
      success: green[500],
      error: red[500],
      lightBackground: "#ffffff30",
    },
    // primary: {},
    secondary: {
      main: grey[900],
      contrastText: "#fff",
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      color: grey[800],
    },
    h2: {
      color: grey[800],
    },
    h3: {
      color: grey[800],
    },
    h4: {
      fontSize: "1.5rem",
      color: grey[800],
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      color: grey[800],
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.15rem",
      color: grey[600],
      fontWeight: 500,
    },
  },
  spacing: 8,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {},
        label: {
          padding: "initial",
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        disableClearable: false,
        size: "small",
      },
    },
  },
});

export default theme;
