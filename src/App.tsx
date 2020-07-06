import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Layout } from './components/Layout';
import { theme, GlobalStyle } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout
        header={<div>Header</div>}
        sidebar={<div>Sidebar</div>}
        content={<div>Content</div>}
        footer={<div>Footer</div>}
      />
    </ThemeProvider>
  );
}

export default App;
