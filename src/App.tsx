import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from './store/AppContext';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { theme, GlobalStyle } from './theme';


function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout
          header={<Header />}
          sidebar={<Sidebar />}
          content={<div>Content</div>}
          footer={<div>Footer</div>}
        />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
