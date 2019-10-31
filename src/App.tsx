import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import globalStyles from '@/styles/global.scss';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Navbar />
      </div>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
