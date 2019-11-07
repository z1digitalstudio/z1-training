import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg';

interface ListParameters {
  title: string;
  items: string[];
  selected?: boolean;
}

export function Collapse({ title, items, selected = false }: ListParameters) {
  return (
    <>
      <div
        className={classNames(styles.collapseWrapper, {
          [styles.selected]: selected,
        })}
      >
        <div className={styles.collapseHeader}>
          <div className={styles.collapseHeaderTitle}>{title}</div>
          <div className={styles.collapseHeaderIcon}>
            {selected ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
        <div className={styles.collapseBody}>
          <ul className={styles.items}>
            {items.map((value, index) => {
              return (
                <li className={styles.item} key={index}>
                  {' '}
                  {value}{' '}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
