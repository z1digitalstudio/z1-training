import React from 'react';
import { Header } from '@/components/LayoutOne/Header';
import { Jumbotron } from '@/components/LayoutOne/Jumbotron';
import { Footer } from '@/components/LayoutOne/Footer';
import { OperatingSystem } from './OperatingSystem';
import styles from './styles.module.scss';
import AppleIcon from './Apple_logo_grey.svg';
import AngleDown from './angle-down-solid.svg';

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
        <OperatingSystem
          os="Flow 1.8"
          description="Performance improvements and bug fixes."
          dateTimeAttribute="2019-03-10"
          date="March 10, 2019"
          added={[
            'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            'Quisque imperdiet pharetra ipsum at luctus.',
          ]}
          fixed={['Integer porta nulla nisl, vel posuere orci consequat at.']}
          improved={[
            'Integer porta nulla nisl, vel posuere orci consequat at.',
            'Quisque imperdiet pharetra ipsum at luctus.',
          ]}
        />
        <OperatingSystem
          os="Flow 1.7"
          description="The release includes improvements and bug fixes."
          dateTimeAttribute="2019-01-07"
          date="January 7, 2019"
          added={[
            'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            'Donec ut feugiat justo. Morbi maximus placerat egestas.',
            'Quisque imperdiet pharetra ipsum at luctus.',
            'Donec ut feugiat justo. Morbi maximus placerat egestas.',
          ]}
          fixed={[
            'Integer porta nulla nisl, vel posuere orci consequat at.',
            'Suspendisse neque lorem, viverra id nulla vitae.',
            'Quisque mattis lobortis sem, at dignissim neque egestas non.',
          ]}
          improved={[
            'Integer porta nulla nisl, vel posuere orci consequat at.',
            'Suspendisse neque lorem, viverra id nulla vitae.',
            'Integer porta nulla nisl, vel posuere orci consequat at.',
            'Quisque imperdiet pharetra ipsum at luctus.',
          ]}
        >
          <span>
            See more{' '}
            <img
              className={styles.angleIcon}
              src={AngleDown}
              alt="Angle down icon"
            />
          </span>
        </OperatingSystem>

        <OperatingSystem
          os="Flow 1.6"
          description="Performance improvements and bug fixes."
          dateTimeAttribute="2018-12-15"
          date="December 15, 2018"
          added={[
            'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            'Quisque imperdiet pharetra ipsum at luctus.',
          ]}
          fixed={['Integer porta nulla nisl, vel posuere orci consequat at.']}
          improved={[
            'Integer porta nulla nisl, vel posuere orci consequat at.',
            'Quisque imperdiet pharetra ipsum at luctus.',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
