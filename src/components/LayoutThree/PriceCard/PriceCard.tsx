import React from 'react';
import Button from '../../Common/Button/Button';
import styles from './PriceCard.scss';

interface Props {
  currency: string;
  price: string;
}

export default function PriceCard({ currency, price }: Props) {
  return (
    <div className={styles.priceContent}>
      <div className={styles.priceBox}>
        <span className={styles.currency}>{currency}</span>
        <span className={styles.price}> {price}</span>
        <img src="info-circle-solid.svg"></img>
      </div>
      <span>Per User/Month</span>
      <Button value="Try Flow for Free"></Button>
    </div>
  );
}
