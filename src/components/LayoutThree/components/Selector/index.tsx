import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export function Selector() {
  const yearlySelected = true;
  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.selectorWrapperOptions}>
        <div
          className={classNames(styles.yearly, {
            [styles.selected]: yearlySelected,
          })}
        >
          <p className={styles.infoMsg}>Pay Yearly (Save 25%)</p>
        </div>
        <div
          className={classNames(styles.monthly, {
            [styles.selected]: !yearlySelected,
          })}
        >
          <p className={styles.infoMsg}>Pay Monthly</p>
        </div>
      </div>
      <p className={styles.selectorWrapperText}>Save 25% by paying yearly!”</p>
    </div>
  );
}
