import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as Check } from '@/components/LayoutThree/Update/check-solid.svg';
import { Update } from '@/components/LayoutThree/Update';

interface Section {
  title: string;
  items: Item[];
}

interface Item {
  itemText: string;
}

export function Section({
  version,
  description,
  date,
  sections,
  icon: Icon,
}: Update) {
  return (
    <div className={`${styles.row} ${globalStyles.contentWrapper}`}>
      <div className={styles.leftSide}>
        <div className={styles.version}>
          {Icon ? <Icon className={styles.icon} /> : null}
          <h2 className={styles.title}>{version}</h2>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.rightSide}>
        {sections.map(section => (
          <div key={section.title} className={styles.section}>
            <h3 className={styles.title}>{section.title}</h3>
            {section.items.map(item => (
              <div key={item.itemText} className={styles.item}>
                <Check className={styles.check} />
                <p className={styles.itemText}>{item.itemText}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
