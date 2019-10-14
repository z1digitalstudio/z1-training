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
        <Jumbotron />
        <Sitemap />
      </main>
      <Footer />
    </>
  );
}
