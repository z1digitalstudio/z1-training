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
        className={classNames(styles['collapse-wrapper'], {
          [styles.selected]: selected,
        })}
      >
        <div className={styles['collapse-header']}>
          <div className={styles['collapse-header-title']}>{title}</div>
          <div className={styles['collapse-header-icon']}>
            {selected ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
        <div className={styles['collapse-body']}>
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
