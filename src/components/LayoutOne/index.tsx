import React from 'react';
import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Header from '../Header/Header';
import Sitemap from '../Sitemap/Sitemap';
import globalStyles from '@/styles/global.scss';

export function LayoutOne() {
  return (
    <div className={globalStyles.contentWrapper}>
      <Header />
      <main>
        <Jumbotron title="Flow Site Map" subtitle="lorem ipsum" />
        <Sitemap />
      </main>
      <Footer />
    </div>
  );
}
