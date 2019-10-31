import React from 'react';
import styles from './styles.module.scss';
import { List } from '../../../ui/List';
import { firstList, secondList, thirdList } from './lists';

export function Sitemap() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Homepage</p>
        </div>
        <div className={styles.lists}>
          <div className={styles.first_column}>
            {firstList.map((value, index) => {
              return (
                <List key={index} title={value.title} items={value.items} />
              );
            })}
          </div>
          <div className={styles.second_column}>
            {secondList.map((value, index) => {
              return (
                <List key={index} title={value.title} items={value.items} />
              );
            })}
          </div>
          <div className={styles.third_column}>
            {thirdList.map((value, index) => {
              return (
                <List key={index} title={value.title} items={value.items} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
