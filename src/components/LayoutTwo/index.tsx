import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { NavBar } from '@/components/NavBar';
import { Fold } from '@/components/Fold';
import { Footer } from '@/components/Footer';

export function LayoutTwo() {
  return (
    <>
      <NavBar></NavBar>
      <Fold
        title="Updates"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pellentesque metus, id mollis elit."
      ></Fold>
      <div className={globalStyles.contentWrapper}>
        <h1 className={styles.title}>Soy el layout 2</h1>
      </div>
      <Footer></Footer>
    </>
  );
}
