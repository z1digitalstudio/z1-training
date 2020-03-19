import React from 'react';
import { Jumbotron } from '../Common/Jumbotron';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import { ColumnMenu } from './ColumnBox/ColumnMenu/ColumnMenu';

export function LayoutOne() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron title="Flow Site Map" subtitle="lorem ipsum" />
        <ColumnMenu></ColumnMenu>
      </main>
      <Footer></Footer>
    </>
  );
}
