import React, { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export function Selector() {
  const [isYearlySelected, setIsYearlySelected] = useState(true);
  const selectOption = (yearlySelect: boolean) => {
    setIsYearlySelected(yearlySelect);
  };
  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.selectorWrapperOptions}>
        <div
          onClick={() => selectOption(true)}
          className={classNames(styles.yearly, {
            [styles.selected]: isYearlySelected,
          })}
        >
          <p className={styles.infoMsg}>Pay Yearly (Save 25%)</p>
        </div>
        <div
          onClick={() => selectOption(false)}
          className={classNames(styles.monthly, {
            [styles.selected]: !isYearlySelected,
          })}
        >
          <p className={styles.infoMsg}>Pay Monthly</p>
        </div>
      </div>
      <p className={styles.selectorWrapperText}>Save 25% by paying yearly!”</p>
    </div>
  );
}
