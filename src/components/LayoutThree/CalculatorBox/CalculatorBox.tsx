import React from 'react';
import Button from '../../Common/Button/Button';
import styles from './CalculatorBox.scss';

interface Props {
  currency: string;
  inputPrice: string;
}

export default function CalculatorBox({ currency, inputPrice }: Props) {
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
          {currency} {inputPrice}{' '}
          <img className={styles.iconImg} src="info-circle-solid.svg" alt="" />
        </div>
        <span>Price for 3 users</span>
        <Button value="Try Flow for Free"></Button>
      </div>
    </div>
  );
}
