import React from 'react';
import NavBar from '../NavBar/NavBar';
import ContentBody from '../ContentBody/ContentBody';
import { ColumnMenu } from '../ColumnMenu/ColumnMenu';
import Footer from '../Footer/Footer';
import SubFooter from '../SubFooter/SubFooter';

export function LayoutOne() {
  return (
    <>
      <NavBar></NavBar>
      <ContentBody></ContentBody>
      <ColumnMenu />
      <Footer></Footer>
      <SubFooter></SubFooter>
    </>
  );
}
