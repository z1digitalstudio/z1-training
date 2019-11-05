import React from 'react';
import Updates from './Updates/Updates';
import globalStyles from '@/styles/global.scss';

import { Jumbotron } from '../Common/Jumbotron';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
export function LayoutTwo() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron title="Updates" subtitle="Lorem ipsum" />
        <Updates />
      </main>
      <Footer></Footer>
    </>
  );
}
