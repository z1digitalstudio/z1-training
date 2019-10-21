import React from 'react';
import { Header } from '@/components/LayoutOne/Header';
import { Jumbotron } from '@/components/LayoutOne/Jumbotron';
import { Footer } from '@/components/LayoutOne/Footer';
import { OperatingSystem } from './OperatingSystem';
import AppleIcon from './Apple_logo_grey.svg';

export function LayoutTwo() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron
          title="Updates"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pellentesque metus, id mollis elit."
        />
        <OperatingSystem
          icon={AppleIcon}
          os="for iOS 5.25"
          description="Performance improvements and bug fixes."
          dateTimeAttribute="2019-03-20"
          date="March 20, 2019"
          added={[
            'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            'Praesent id molestie leo.',
            'Donec ut feugiat justo. Morbi maximus placerat egestas.',
          ]}
          fixed={['Integer porta nulla nisl, vel posuere orci consequat at.']}
          improved={[
            'Integer porta nulla nisl, vel posuere orci consequat at.',
            'Donec ut feugiat justo. Morbi maximus placerat egestas.',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
