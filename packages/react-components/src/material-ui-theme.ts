import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  // interface Theme {
  //   background: {
  //     darkButton: React.CSSProperties["color"];
  //   };
  // }
  // // allow configuration using `createTheme`
  // interface ThemeOptions {
  //   background?: {
  //     darkButton?: React.CSSProperties["color"];
  //   };
  // }

  interface TypographyVariants {
    bold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bold?: React.CSSProperties;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    darkButtonBg: Palette["primary"];
    darkBg: Palette["primary"];
  }
  interface PaletteOptions {
    darkButtonBg: PaletteOptions["primary"];
    darkBg: PaletteOptions["primary"];
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bold: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    darkButtonBg: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    darkBg: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8E65FF",
    },
    secondary: {
      main: "#7c7c7c",
    },
    darkBg: {
      main: "#1D1930",
    },
    darkButtonBg: {
      main: "#292E35",
    },
    action: {
      disabledBackground: "rgba(142, 101, 255, 0.5)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    text: {
      disabled: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica"',
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "-apple-system",
    ].join(","),
    bold: {
      fontFamily: [
        '"Helvetica"',
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        "-apple-system",
      ].join(","),
      fontWeight: "bold",
    },
  },
});
