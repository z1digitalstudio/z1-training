import React from 'react';
import Updates from '../Updates/Updates';
import globalStyles from '@/styles/global.scss';

import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Header from '../Header/Header';
export function LayoutTwo() {
  return (
    <div className={globalStyles.contentWrapper}>
      <Header />
      <main>
        <Jumbotron title="Updates" subtitle="Lorem ipsum" />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}
