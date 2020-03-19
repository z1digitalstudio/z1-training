import React from 'react';
import { Jumbotron } from '@/components/ui/jumbotron';
import { Sitemap } from '@/components/LayoutTwo/components/Sitemap';
import globalStyles from '@/styles/global.scss';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function LayoutTwo() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Navbar />
      </div>
      <main>
        <Jumbotron
          title="Updates"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis sit amet pellentesque metus, id mollis elit."
        />
        <Sitemap />
      </main>
      <Footer />
    </>
  );
}
