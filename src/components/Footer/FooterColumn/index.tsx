import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ReactComponent as AngleDownIcon } from '@/components/SVGIcon/angle-down-solid.svg';
import { ReactComponent as AngleUpIcon } from '@/components/SVGIcon/angle-up-solid.svg';

export function FooterColumn(props: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={classNames(styles.column, {[styles.expanded]: expanded})}>
        <div className={styles.columnHeader} onClick={() => setExpanded(!expanded)}>
          <span className={styles.columnTitle}>{props.title}</span>
          {expanded ? <AngleUpIcon></AngleUpIcon> : <AngleDownIcon></AngleDownIcon>}
        </div>
        <div className={styles.columnContent}>
          {props.children}
        </div>
      </div>
    </>
  );
}