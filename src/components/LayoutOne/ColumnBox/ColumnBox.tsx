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
        <h1 className={styles.columnTitle}>{props.title}</h1>
        <img src="caret-down-solid.svg"></img>
      </div>
      <div className={setStyles(isExpanded)}>{props.children}</div>
    </div>
  );
}
