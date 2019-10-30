import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { HomePage } from '@/components/LayoutOne/components/HomePage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function LayoutOne() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Navbar />
      </div>
      <div className={styles['border-bar']}></div>
      <div className={styles.header}>
        <h1>Flow Site Map</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={globalStyles.contentWrapper}>
        <HomePage />
      </div>
      <Footer />
    </>
  );
}
