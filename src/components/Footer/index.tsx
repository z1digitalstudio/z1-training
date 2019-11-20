import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as ArrowDown } from './chevron-down-solid.svg';

const footer = {
  sections: [
    {
      title: 'FLOW',
      links: [
        {
          name: 'For Teams',
          url: '',
        },
        {
          name: 'For Enterprise',
          url: '',
        },
        {
          name: 'Flow Solo',
          url: '',
        },
      ],
    },
    {
      title: 'RESULTS',
      links: [
        {
          name: 'Customers',
          url: '',
        },
        {
          name: 'Reviews',
          url: '',
        },
        {
          name: 'Stories',
          url: '',
        },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        {
          name: 'Download Flow',
          url: '',
        },
        {
          name: 'Integrations (New)',
          url: '',
        },
        {
          name: 'Developers',
          url: '',
        },
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        {
          name: 'Get Help',
          url: '',
        },
        {
          name: 'Helpful Guides',
          url: '',
        },
        {
          name: 'Tutorials (New)',
          url: '',
        },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        {
          name: 'Our Story',
          url: '',
        },
        {
          name: 'Contact Us',
          url: '',
        },
        {
          name: 'Blog',
          url: '',
        },
      ],
    },
  ],
};

export function Footer() {
  return (
    <>
      <div className={styles.divisor}></div>
      <footer className={globalStyles.contentWrapper}>
        <div className={styles.grid}>
          {footer.sections.map(section => (
            <div key={section.title} className={styles.box}>
              <div className={styles.linksHeader}>
                <h1 className={styles.title}>{section.title}</h1>
                <ArrowDown className={styles.arrowDown} />
              </div>
              {section.links.map(link => (
                <a key={`${section.title} ${link.name}`} href={link.url}>
                  {link.name}
                </a>
              ))}
              <div className={styles.divisorCortoMobile}></div>
            </div>
          ))}
        </div>
        <div className={styles.divisorCorto}></div>
        <div className={styles.subfooter}>
          <p className={styles.text}>
            © 2019 Flow Technologies Ltd. All rights reserved.
          </p>
          <div className={styles.links}>
            <a href={''} className={styles.text}>
              Privacy & Terms
            </a>
            <a href={''} className={styles.text}>
              Service Status
            </a>
            <a href={''} className={styles.text}>
              Site Map
            </a>
          </div>
          <select className={styles.selector}>
            <option value={''}>English</option>
            <option value={''}>Español</option>
            <option value={''}>Français</option>
          </select>
        </div>
      </footer>
    </>
  );
}
