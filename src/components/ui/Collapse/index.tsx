import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(selected);
  const toggleCollapse = () => {
    if ((message && message.length > 0) || (items && items.length > 0)) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      <div
        className={classNames(styles.collapseWrapper, {
          [styles.selected]: isOpen,
          [styles.withBorderTop]: withBorderTop,
        })}
      >
        <div className={styles.collapseHeader} onClick={() => toggleCollapse()}>
          <div className={styles.collapseHeaderTitle} style={styleTitle}>
            {title}
          </div>
          <div className={styles.collapseHeaderIcon} style={extraStyleIcon}>
            {isOpen ? <ArrowUp /> : <ArrowDown />}
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
