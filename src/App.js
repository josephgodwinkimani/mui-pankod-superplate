import "./styles/global.css";
import "./i18n";

import { ApolloProvider } from "@apollo/client";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { jssPreset,StylesProvider } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import React from "react";
import { BrowserRouter } from 'react-router-dom';

import ResponsiveDrawer from "./components/drawer";
import AppRouter from "./routes";
import { initializeApollo } from "./services/graphql";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const apolloClient = initializeApollo();
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <BrowserRouter>
                <ResponsiveDrawer darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle}>
                  <AppRouter />
                </ResponsiveDrawer>
              </BrowserRouter>
            </div>
          </ThemeProvider>
        </StylesProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
