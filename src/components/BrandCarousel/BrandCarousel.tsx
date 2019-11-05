import globalStyles from '@/styles/global.scss';
import React from 'react';
import styles from './BrandCarousel.scss';

export default function BrandCarousel(props: any) {
  return (
    <div className={globalStyles.contentWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Loved by thousands of organizations across the globe
        </h1>
        <div className={styles.itemContainer}>{props.children}</div>
      </div>
    </div>
  );
}
