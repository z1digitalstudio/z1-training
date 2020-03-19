import React from 'react';
import globalStyles from '@/styles/global.scss';
import { Header } from '@/components/Header';
import { Fold } from '@/components/Fold';
import { Footer } from '@/components/Footer';
import { Update } from './Update';

export function LayoutThree() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Header />
      </div>
      <Fold title="Updates" subtitle="Subtitle" />
      <main>
        <Update />
      </main>
      <Footer />
    </>
  );
}
