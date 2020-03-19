import React from 'react';
import styles from './styles.module.scss';

interface Link {
  name: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface Sitemap {
  mainLink: Link;
  sections: Section[];
}

const sitemap: Sitemap = {
  mainLink: {
    name: 'Homepage',
    url: '',
  },
  sections: [
    {
      title: 'Choose FLow',
      links: [
        {
          name: 'Why Flow',
          url: '',
        },
        {
          name: 'Features',
          url: '',
        },
        {
          name: 'Pricing',
          url: '',
        },
        {
          name: 'Security',
          url: '',
        },
        {
          name: 'Updates',
          url: '',
        },
      ],
    },
    {
      title: 'Flow',
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
          name: 'Flow Chart',
          url: '',
        },
        {
          name: 'Flow Solo',
          url: '',
        },
      ],
    },
    {
      title: 'Results',
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
      title: 'Resources',
      links: [
        {
          name: 'Download Flow',
          url: '',
        },
        {
          name: 'Integrations',
          url: '',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          name: 'Get Help',
          url: '',
        },
        {
          name: 'Getting Started',
          url: '',
        },
        {
          name: 'Tutorials',
          url: '',
        },
        {
          name: 'Helpful Guides',
          url: '',
        },
      ],
    },
    {
      title: 'Developers',
      links: [
        {
          name: 'Developing for Flow',
          url: '',
        },
        {
          name: 'API Documentation',
          url: '',
        },
        {
          name: 'Site Status',
          url: '',
        },
      ],
    },
    {
      title: 'Company',
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
          name: 'Careers',
          url: '',
        },
        {
          name: 'Blog',
          url: '',
        },
      ],
    },
    {
      title: 'Flow for...',
      links: [
        {
          name: 'Flow for Education',
          url: '',
        },
        {
          name: 'Flow for Nonprofits',
          url: '',
        },
        {
          name: 'Flow for Makers',
          url: '',
        },
      ],
    },
    {
      title: 'Flow Legal',
      links: [
        {
          name: 'Legal',
          url: '',
        },
        {
          name: 'Terms of Service',
          url: '',
        },
        {
          name: 'Privacy Policy',
          url: '',
        },
        {
          name: 'Acceptable Use Policy',
          url: '',
        },
        {
          name: 'Subprocessors',
          url: '',
        },
      ],
    },
  ],
};

export function Sitemap() {
  return (
    <>
      <a href={sitemap.mainLink.url} className={styles.mainLink}>
        {sitemap.mainLink.name}
      </a>
      <div className={styles.divisorCorto}></div>
      <div className={styles.grid}>
        {sitemap.sections.map(section => (
          <div key={section.title} className={styles.box}>
            <h2 className={styles.title}>{section.title}</h2>
            {section.links.map(link => (
              <a key={`${section.title} ${link.name}`} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
