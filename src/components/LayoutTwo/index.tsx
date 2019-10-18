import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Header } from '@/components/LayoutOne/Header';
import { Jumbotron } from '@/components/LayoutOne/Jumbotron';
import { Footer } from '@/components/LayoutOne/Footer';
import { OperatingSystem } from './OperatingSystem';

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
          os="for iOS 5.25"
          description="Performance improvements and bug fixes."
          dateTimeAttribute="2019-03-20"
          date="March 20, 2019"
          added="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          fixed=""
          improved=""
        />

        <div className={styles.contentInfo}>
          <ul>
            <h3>Added</h3>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Praesent id molestie leo.</li>
            <li>Donec ut feugiat justo. Morbi maximus placerat egestas.</li>
          </ul>
          <ul>
            <h3>Fixed</h3>
            <li>Integer porta nulla nisl, vel posuere orci consequat at.</li>
          </ul>
          <ul>
            <h3>Improved</h3>
            <li>Integer porta nulla nisl, vel posuere orci consequat at.</li>
            <li>Donec ut feugiat justo. Morbi maximus placerat egestas.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
