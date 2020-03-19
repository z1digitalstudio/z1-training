import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Dropdown } from './caret-down-solid.svg';
import { ReactComponent as Apple } from './apple-brands.svg';
import { Section } from '@/components/LayoutThree/Update/Section';

interface Updates {
  update: Update[];
}

export interface Update {
  version: string;
  icon?: any;
  description: string;
  date: string;
  sections: Section[];
}

interface Section {
  title: string;
  items: Item[];
}

interface Item {
  itemText: string;
}

const updates: Updates = {
  update: [
    {
      version: 'Flow for iOS 5.25',
      icon: Apple,
      description: 'Performance improvements and bug fixes.',
      date: 'March 20, 2019',
      sections: [
        {
          title: 'Added',
          items: [
            {
              itemText:
                'Item 1 super cali fragilistico espialidoso. Wubba Lubba Dub Dub. Mas cosas. ',
            },
            {
              itemText: 'Item 2 super cali fragilistico espialidoso.',
            },
            {
              itemText:
                'Item 3 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
          ],
        },
        {
          title: 'Fixed',
          items: [
            {
              itemText: 'Item 1 super cali fragilistico espialidoso.',
            },
          ],
        },
        {
          title: 'Improved',
          items: [
            {
              itemText: 'Item 1 super cali fragilistico espialidoso.',
            },
            {
              itemText:
                'Item 2 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
          ],
        },
      ],
    },
    {
      version: 'Flow 1.8',
      description: 'Performance improvements and bug fixes.',
      date: 'March 10, 2019',
      sections: [
        {
          title: 'Added',
          items: [
            {
              itemText:
                'Item 1 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText: 'Item 2 super cali fragilistico espialidoso.',
            },
          ],
        },
        {
          title: 'Fixed',
          items: [
            {
              itemText:
                'Item 1 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
          ],
        },
        {
          title: 'Improved',
          items: [
            {
              itemText:
                'Item 1 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText:
                'Item 2 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
          ],
        },
      ],
    },
    {
      version: 'Flow 1.7',
      description: 'The release includes improvements and bug fixes.',
      date: 'January 7, 2019',
      sections: [
        {
          title: 'Added',
          items: [
            {
              itemText: 'Item 1 super cali fragilistico espialidoso.',
            },
            {
              itemText:
                'Item 2 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText:
                'Item 3 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText: 'Item 4 super cali fragilistico espialidoso.',
            },
          ],
        },
        {
          title: 'Fixed',
          items: [
            {
              itemText:
                'Item 1 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText:
                'Item 2 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText: 'Item 3 super cali fragilistico espialidoso.',
            },
          ],
        },
        {
          title: 'Improved',
          items: [
            {
              itemText:
                'Item 1 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText: 'Item 2 super cali fragilistico espialidoso.',
            },
            {
              itemText:
                'Item 3 super cali fragilistico espialidoso. Wubba Lubba Dub Dub.',
            },
            {
              itemText: 'Item 4 super cali fragilistico espialidoso.',
            },
          ],
        },
      ],
    },
    {
      version: 'Flow 1.6',
      description: 'Performance improvements and bug fixes.',
      date: 'December 15, 2018',
      sections: [
        {
          title: 'Added',
          items: [
            {
              itemText: 'Item 1 super cali fragilistico espialidoso.',
            },
            {
              itemText: 'Item 2 super cali fragilistico espialidoso.',
            },
          ],
        },
        {
          title: 'Fixed',
          items: [
            {
              itemText: 'Item 1 super cali fragilistico espialidoso.',
            },
          ],
        },
        {
          title: 'Improved',
          items: [
            {
              itemText: 'Item 1 super cali fragilistico espialidoso.',
            },
            {
              itemText: 'Item 2 super cali fragilistico espialidoso.',
            },
          ],
        },
      ],
    },
  ],
};

export function Update() {
  return (
    <>
      {updates.update.map(update => (
        <div key={update.version} className={styles.wrapper}>
          <Section
            version={update.version}
            description={update.description}
            date={update.date}
            sections={update.sections}
            icon={update.icon}
          />
        </div>
      ))}
      <div className={styles.more}>
        <button className={styles.show}>
          <p className={styles.text}>Show Previous Updates</p>
          <Dropdown className={styles.icon} />
        </button>
      </div>
    </>
  );
}
