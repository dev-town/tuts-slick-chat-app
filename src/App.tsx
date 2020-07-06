import React from 'react';

import { Layout } from './components/Layout';

function App() {
  return (
    <Layout
      header={<div>Header</div>}
      sidebar={<div>Sidebar</div>}
      content={<div>Content</div>}
      footer={<div>Footer</div>}
    />
  );
}

export default App;
