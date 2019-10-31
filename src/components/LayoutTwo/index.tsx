import React from 'react';
import { Jumbotron } from '@/components/ui/jumbotron';
import { Sitemap } from '@/components/LayoutTwo/components/Sitemap';

export function LayoutTwo() {
  return (
    <main>
      <Jumbotron
        title="Updates"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis sit amet pellentesque metus, id mollis elit."
      />
      <Sitemap />
    </main>
  );
}
