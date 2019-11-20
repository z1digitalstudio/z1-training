import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Arrow } from './arrow-right-solid.svg';

interface Legal {
  boxes: Box[];
}

interface Box {
  title: string;
  description: string;
  url: string;
}

const legal: Legal = {
  boxes: [
    {
      title: 'Privacy Policy',
      description:
        'Our policy regarding what information we collect at Flow, how we use it, and what choices you have.',
      url: '',
    },
    {
      title: 'Terms of Service',
      description: 'Our agreement with users of Flow.',
      url: '',
    },
    {
      title: 'Acceptable Use Policy',
      description:
        'A list of acceptable and unacceptable conduct for our services.',
      url: '',
    },
    {
      title: 'Security Overview',
      description: 'We take protecting your security seriously at Flow.',
      url: '',
    },
  ],
};

export function Legal() {
  return (
    <div className={styles.grid}>
      {legal.boxes.map(box => (
        <div key={box.title} className={styles.boxContent}>
          <div className={styles.square}></div>
          <h2 className={styles.title}>{box.title}</h2>
          <p className={styles.description}>{box.description}</p>
          <div className={styles.readMore}>
            <a href={box.url} className={styles.link}>
              Read More
            </a>
            <Arrow className={styles.arrow} />
          </div>
        </div>
      ))}
    </div>
  );
}
