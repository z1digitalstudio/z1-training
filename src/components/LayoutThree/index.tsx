import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Jumbotron } from '@/components/Jumbotron';
import { FeaturesCard } from './FeaturesCard';
import { PriceComparator } from './PriceComparator';
import { ChatModule } from './ChatModule';
import { PriceCalculator } from './PriceCalculator';
import { FlowSoloCta } from './FlowSoloCta';
import { Faq } from './Faq';
import { Footer } from '@/components/Footer';

export function LayoutThree() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Jumbotron
          title="Pricing"
          subtitle="Choose the plan that’s right for you. Our team plans start at just $5.99 a month."
        ></Jumbotron>
        <FeaturesCard></FeaturesCard>
        <PriceComparator></PriceComparator>
        <ChatModule></ChatModule>
        <PriceCalculator></PriceCalculator>
        <FlowSoloCta></FlowSoloCta>
        <Faq></Faq>
      </main>
      <Footer></Footer>
    </>
  );
}
