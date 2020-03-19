import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Header } from '@/components/Header';
import { Fold } from '@/components/Fold';
import { Footer } from '@/components/Footer';
import { Legal } from './Legal';

export function LayoutTwo() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Header />
      </div>
      <Fold
        title="Flow Legal"
        subtitle="Information about our terms and policies."
      />
      <main className={`${styles.main} ${globalStyles.contentWrapper}`}>
        <Legal />
      </main>
      <Footer />
    </>
  );
}
