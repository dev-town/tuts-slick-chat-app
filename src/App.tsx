import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Layout } from './components/Layout';
import { Header } from './components/Header';

import { theme, GlobalStyle } from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout
        header={<Header />}
        sidebar={<div>Sidebar</div>}
        content={<div>Content</div>}
        footer={<div>Footer</div>}
      />
    </ThemeProvider>
  );
}

export default App;
