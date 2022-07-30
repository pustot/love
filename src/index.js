import React from "react";
import { createRoot } from 'react-dom/client';

import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';

import App from "./App";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
