import React from 'react';
import globalStyles from '@/styles/global.scss';
import NavBar from '../NavBar/NavBar';
import ContentBody from '../ContentBody/ContentBody';

export function LayoutOne() {
  return (
    <>
      <NavBar></NavBar>
      <ContentBody></ContentBody>
      <div className={globalStyles.contentWrapper}>
        <p>Soy más contenido</p>
      </div>
    </>
  );
}
