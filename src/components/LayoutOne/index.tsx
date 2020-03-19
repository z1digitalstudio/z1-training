import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Jumbotron } from '@/components/Jumbotron';
import { Sitemap } from './Sitemap';
import { Footer } from '@/components/Footer';

export function LayoutOne() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Jumbotron
          title="Flow Site Map"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></Jumbotron>
        <Sitemap></Sitemap>
      </main>
      <Footer></Footer>
    </>
  );
}
