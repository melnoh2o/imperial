import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </MantineProvider>
    </ThemeProvider>
  );
};

export default Layout;
