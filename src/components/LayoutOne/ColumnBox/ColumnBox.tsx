import React, { useState } from 'react';
import styles from './ColumnBox.scss';

function setStyles(isExpanded: boolean) {
  if (isExpanded) {
    return styles.linksBoxExpanded;
  }
  return styles.linksBox;
}

export default function ColumnBox(props: any) {
  var [isExpanded, setIsExpanded] = useState(false);

  return (
    <div {...props}>
      <div
        className={styles.divColumnRow}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h1 className={styles.title}>{props.title}</h1>
        <i className={styles.down}></i>
      </div>
      <div className={setStyles(isExpanded)}>{props.children}</div>
    </div>
  );
}
