import React from 'react';
import Updates from '../Updates/Updates';

import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Header from '../Header/Header';
export function LayoutTwo() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron />
        <Updates />
      </main>
      <Footer />
    </>
  );
}
