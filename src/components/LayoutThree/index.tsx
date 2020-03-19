import React from 'react';
import { Jumbotron } from '@/components/ui/jumbotron';
import globalStyles from '@/styles/global.scss';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Sitemap } from '@/components/LayoutThree/components/Sitemap';
import styles from './styles.module.scss';

export function LayoutThree() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Navbar />
      </div>
      <main>
        <Jumbotron
          title="Pricing"
          subtitle="Choose the plan that’s right for you. Our team plans start at just $5.99 a month."
          width={750}
          withCard={true}
        />
        <div className={styles.sitemap}>
          <Sitemap />
        </div>
      </main>
      <Footer />
    </>
  );
}
