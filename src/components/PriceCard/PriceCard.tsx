import React from 'react';
import Button from '../Button/Button';
import styles from './PriceCard.scss';

export default function PriceCard(props: any) {
  return (
    <div className={styles.priceContent}>
      <div className={styles.priceBox}>
        <span className={styles.currency}>{props.currency}</span>
        <span className={styles.price}> {props.price}</span>
        <img src="info-circle-solid.svg"></img>
      </div>
      <span>Per User/Month</span>
      <Button value="Try Flow for Free"></Button>
    </div>
  );
}
