import React from 'react';

import { Jumbotron } from '../Common/Jumbotron';
import Header from '../Common/Header/Header';

import Pricing from './Pricing/Pricing';
import Footer from '../Common/Footer/Footer';
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
      <Footer></Footer>
    </div>
  );
}
