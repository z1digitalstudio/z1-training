import React from 'react';
import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Header from '../Header/Header';
import Sitemap from '../Sitemap/Sitemap';

export function LayoutOne() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron />
        <Sitemap />
      </main>
      <Footer />
    </>
  );
}
