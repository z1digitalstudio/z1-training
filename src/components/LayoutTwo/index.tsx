import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Jumbotron } from '@/components/Jumbotron';
import { UpdateList } from './UpdateList';
import { Footer } from '@/components/Footer';

export function LayoutTwo() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Jumbotron
          title="Updates"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pellentesque metus, id mollis elit."
        ></Jumbotron>
        <UpdateList></UpdateList>
      </main>
      <Footer></Footer>
    </>
  );
}
