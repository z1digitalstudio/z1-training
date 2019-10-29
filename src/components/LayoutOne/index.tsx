import React from 'react';
import NavBar from '../NavBar/NavBar';
import ContentBody from '../ContentBody/ContentBody';
import { ColumnMenu } from '../ColumnMenu/ColumnMenu';

export function LayoutOne() {
  return (
    <>
      <NavBar></NavBar>
      <ContentBody></ContentBody>
      <ColumnMenu />
    </>
  );
}
