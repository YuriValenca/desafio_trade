import {createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontSize: '52px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
    },
    button: {
      fontSize: '20px',
      fontWeight: 700,
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 30, 36, 40, 48, 60, 72, 96],
});