import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from './store/AppContext';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import { theme, GlobalStyle } from './theme';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout
          header={<Header />}
          sidebar={<Sidebar />}
          content={<Content />}
          footer={<Footer />}
        />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
