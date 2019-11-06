import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import globalStyles from '@/styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
