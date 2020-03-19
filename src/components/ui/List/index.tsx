import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface ListParameters {
  title: string;
  items: string[];
  isFooter?: boolean;
}

export function List({ title, items, isFooter = false }: ListParameters) {
  return (
    <>
      <ul className={classNames({ [styles.isFooter]: isFooter })}>
        <li className={styles.title}>{title}</li>
        {items.map((value, index) => {
          return (
            <li className={styles.item} key={index}>
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}
