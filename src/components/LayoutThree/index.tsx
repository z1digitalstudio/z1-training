import React from 'react';

import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Header from '../Header/Header';

import Pricing from '../Pricing/Pricing';
export function LayoutThree() {
  return (
    <div>
      <Header />
      <main>
        <Jumbotron
          title="Pricing"
          subtitle="Choose the plan that’s right for you. Our team plans start at just $5.99 a month."
        />
        <Pricing></Pricing>
      </main>
      <Footer />
    </div>
  );
}
