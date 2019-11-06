import React, { useState } from 'react';
import styles from './ColumnBox.scss';
import { MenuArrow } from '@/components/Common/MenuArrow/MenuArrow';

function setStyles(isExpanded: boolean) {
  if (isExpanded) {
    return styles.linksBoxExpanded;
  }
  return styles.linksBox;
}

interface Props {
  title: string;
  children: React.ReactNode;
}
export default function ColumnBox({ title, children }: Props) {
  var [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className={styles.divColumnRow}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h1 className={styles.columnTitle}>{title}</h1>
        <MenuArrow></MenuArrow>
      </div>
      <div className={setStyles(isExpanded)}>{children}</div>
    </div>
  );
}
