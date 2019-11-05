import React from 'react';
import styles from './TierBox.scss';

export default function TierBox(props: any) {
  return (
    <div className={styles.tierBoxContent}>
      <div className={styles.tierBox}>{props.children}</div>
      <div className={styles.compareFeatures}>
        {' '}
        Compare all Features <img src="caret-down-solid.svg"></img>
      </div>
    </div>
  );
}
