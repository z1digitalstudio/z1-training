import React from 'react';
import styles from './FooterColumn.scss';
import { ReactComponent as AngleDownIcon } from '../SVGIcon/angle-down-solid.svg';
import { ReactComponent as AngleUpIcon } from '../SVGIcon/angle-up-solid.svg';

export function FooterColumn(props: any) {
  return (
    <>
      <div className={styles.column}>
        <div className={styles.columnHeader}>
          <span className={styles.columnTitle}>{props.title}</span>
          <AngleDownIcon className={styles.angleDown}></AngleDownIcon>
          <AngleUpIcon className={styles.angleUp}></AngleUpIcon>
        </div>
        <div className={styles.columnContent}>
          {props.children}
        </div>
      </div>
    </>
  );
}
