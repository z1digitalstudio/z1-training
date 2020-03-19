import globalStyles from '@/styles/global.scss';
import React from 'react';
import styles from './BrandCarousel.scss';

interface Props {
  children?: React.ReactNode;
}
export default function BrandCarousel({ children }: Props) {
  return (
    <div className={globalStyles.contentWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Loved by thousands of organizations across the globe
        </h1>
        <div className={styles.itemContainer}>{children}</div>
      </div>
    </div>
  );
}
