import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as ArrowDown } from '@/assets/icons/sort-down.svg';

interface DropdownParameters {
  title: string;
  items?: string[];
  width?: number;
  withBorder?: boolean;
}

export function Dropdown({
  title,
  width = 10,
  items,
  withBorder = false,
}: DropdownParameters) {
  const customStyle = {
    marginRight: width + 'px',
  };
  return (
    <>
      <div
        className={classNames(styles['dropdown-wrapper'], {
          [styles['with-border']]: withBorder,
        })}
      >
        <div className={styles['dropdown-header']}>
          <div className={styles['dropdown-header-title']} style={customStyle}>
            {title}
          </div>
          <ArrowDown className={styles['dropdown-header-icon']} />
        </div>
      </div>
    </>
  );
}
