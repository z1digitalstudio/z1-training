import React from 'react';
import styles from './Link.scss';

export function Link(props: any) {
  return (
    <span className={styles.urlLink} {...props}>
      {props.children}
    </span>
  );
}
