import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { List } from '@/components/ui/List';
import ITEMS_LIST from '@/components/Footer/lists';
import { SubFooter } from '@/components/Footer/SubFooter';
import { Collapse } from '@/components/ui/Collapse';

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={globalStyles.contentWrapper}>
          <div className={styles.container}>
            {ITEMS_LIST.map((value, index) => {
              return (
                <div key={index} className={styles.item}>
                  <List
                    isFooter={true}
                    title={value.title}
                    items={value.items}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.responsiveLists}>
            {ITEMS_LIST.map((value, index) => {
              return (
                <Collapse
                  key={index}
                  title={value.title}
                  items={value.items}
                  selected={value.selected}
                />
              );
            })}
          </div>
          <SubFooter />
        </div>
      </div>
    </>
  );
}
