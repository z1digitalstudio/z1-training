import React from 'react';
import { Header } from '@/components/LayoutOne/Header';
import { Jumbotron } from '@/components/LayoutOne/Jumbotron';
import { Sitemap } from '@/components/LayoutOne/Sitemap';
import { Footer } from '@/components/LayoutOne/Footer';

export function LayoutOne() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron
          title="Tofu Site Map"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Sitemap />
      </main>
      <Footer />
    </>
  );
}
