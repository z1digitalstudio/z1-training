import React from 'react';
import globalStyles from '@/styles/global.scss';
import { Sitemap } from '@/components/LayoutOne/components/Sitemap';
import { Jumbotron } from '@/components/ui/jumbotron';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function LayoutOne() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Navbar />
      </div>
      <main>
        <Jumbotron
          title="Flow Site Map"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className={globalStyles.contentWrapper}>
          <Sitemap />
        </div>
      </main>
      <Footer />
    </>
  );
}
