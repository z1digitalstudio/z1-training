import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Sitemap } from '@/components/Sitemap';
import { Header } from '@/components/Header';
import { Fold } from '@/components/Fold';
import { Footer } from '@/components/Footer';

export function LayoutOne() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Header />
      </div>
      <Fold title="Flow Site Map" subtitle="Subtitle" />
      <main className={`${styles.main} ${globalStyles.contentWrapper}`}>
        <Sitemap />
      </main>
      <Footer />
    </>
  );
}
