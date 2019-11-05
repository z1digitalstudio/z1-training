import React from 'react';
import Button from '../Button/Button';
import styles from './CalculatorBox.scss';

export default function CalculatorBox(props: any) {
  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculatorHeader}>
        <div className={styles.imgHeader}></div>
        <span className={styles.title}>
          Find out exactly how much you'll pay? Use our pricing calculator.
        </span>
        <span className={styles.subtitle}>Team Size</span>
        <div>
          <img className={styles.iconImg} src="minus-solid.svg"></img>{' '}
          <input className={styles.forminput} type="text" />{' '}
          <img className={styles.iconImg} src="plus-solid.svg"></img>
        </div>
      </div>
      <div className={styles.calculatorContent}>
        <div className={styles.priceContent}>
          {props.currency} {props.inputPrice}{' '}
          <img className={styles.iconImg} src="info-circle-solid.svg" alt="" />
        </div>
        <span>Price for 3 users</span>
        <Button value="Try Flow for Free"></Button>
      </div>
    </div>
  );
}
