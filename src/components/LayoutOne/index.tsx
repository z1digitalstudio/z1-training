import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Sitemap } from '@/components/LayoutOne/components/Sitemap';
import { Jumbotron } from '@/components/ui/jumbotron';

export function LayoutOne() {
  return (
    <>
      <main>
        <Jumbotron
          title="Flow Site Map"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className={globalStyles.contentWrapper}>
          <Sitemap />
        </div>
      </main>
    </>
  );
}
