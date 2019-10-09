import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function LayoutOne() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <h1 className={styles.title}>Soy el layout 1</h1>
      </div>
      <div className={styles.background} />
      <div className={globalStyles.contentWrapper}>
        <p>Soy más contenido</p>
      </div>
    </>
  );
}
