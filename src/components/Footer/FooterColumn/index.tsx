import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ReactComponent as AngleDownIcon } from '@/components/SVGIcon/angle-down-solid.svg';
import { ReactComponent as AngleUpIcon } from '@/components/SVGIcon/angle-up-solid.svg';

export function FooterColumn(props: any) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div className={classNames(styles.column, {[styles.selected]: selected})}>
        <div className={styles.columnHeader} onClick={() => setSelected(!selected)}>
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
