import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as SortDown } from '@/assets/icons/sort-down.svg';
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down.svg';

interface DropdownParameters {
  title: string;
  items?: string[];
  width?: number;
  withBorder?: boolean;
  sortIcon?: boolean;
}

export function Dropdown({
  title,
  width = 10,
  items,
  withBorder = false,
  sortIcon = true,
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
          {sortIcon ? (
            <SortDown className={styles['dropdown-header-icon']} />
          ) : (
            <ArrowDown className={styles['dropdown-header-icon']} />
          )}
        </div>
      </div>
    </>
  );
}
