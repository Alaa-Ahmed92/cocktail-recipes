import React from 'react';

import Layout from './Layout/Layout';

function App() {
  return (
    <div className="app" data-testid="app">
      <Layout data-testid="layout" />
    </div>
  );
}

export default App;
