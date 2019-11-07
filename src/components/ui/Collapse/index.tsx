import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '@/assets/icons/arrow-up.svg';

interface ListParameters {
  title: string;
  items?: string[];
  message?: string;
  isList?: boolean;
  selected?: boolean;
  withBorderTop?: boolean;
  styleTitle: {};
  extraStyleIcon?: {};
}

export function Collapse({
  title,
  items = [],
  selected = false,
  isList = true,
  message,
  withBorderTop = false,
  styleTitle,
  extraStyleIcon = {},
}: ListParameters) {
  return (
    <>
      <div
        className={classNames(styles.collapseWrapper, {
          [styles.selected]: selected,
          [styles.withBorderTop]: withBorderTop,
        })}
      >
        <div className={styles.collapseHeader}>
          <div className={styles.collapseHeaderTitle} style={styleTitle}>
            {title}
          </div>
          <div className={styles.collapseHeaderIcon} style={extraStyleIcon}>
            {selected ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
        <div className={styles.collapseBody}>
          { isList ?
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
            : <p className={styles.message}>{message}</p>
          }
        </div>
      </div>
    </>
  );
}
