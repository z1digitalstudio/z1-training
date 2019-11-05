import React from 'react';
import styles from './Tier.scss';
import Card from '../Card/Card';
import PriceCard from '../PriceCard/PriceCard';

export default function Tier(props: any) {
  return (
    <div className={styles.tierBox}>
      <Card {...props}> </Card>
      <PriceCard price={props.price} currency={props.currency}></PriceCard>
      <div className={styles.extra}>{props.extra}</div>
      <div className={styles.featsTier}>
        <ul className={styles.itemListTier}>{props.children}</ul>
      </div>
    </div>
  );
}
