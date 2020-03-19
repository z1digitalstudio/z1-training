import React from 'react';
import styles from './Tier.scss';
import { Card } from '../Card/Card';
import PriceCard from '../PriceCard/PriceCard';

interface Props {
  price: string;
  currency: string;
  extra?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function Tier({
  price,
  currency,
  extra,
  children,
  title,
  subtitle,
}: Props) {
  return (
    <div className={styles.tierBox}>
      <Card title={title || ''} subtitle={subtitle || ''}>
        {' '}
      </Card>
      <PriceCard price={price} currency={currency}></PriceCard>
      <div className={styles.extra}>{extra}</div>
      <div className={styles.featsTier}>
        <ul className={styles.itemListTier}>{children}</ul>
      </div>
    </div>
  );
}
