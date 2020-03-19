import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { ScrollToTop } from '@/components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;
