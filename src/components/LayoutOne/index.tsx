import React from 'react';
import { Jumbotron } from '../Common/Jumbotron';
import Header from '../Common/Header/Header';
import Sitemap from './Sitemap/Sitemap';
import Footer from '../Common/Footer/Footer';

export function LayoutOne() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron title="Flow Site Map" subtitle="lorem ipsum" />
        <Sitemap />
      </main>
      <Footer></Footer>
    </>
  );
}
