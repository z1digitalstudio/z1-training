import React from 'react';
import globalStyles from '@/styles/global.scss'
import styles from './styles.module.scss'

export function LayoutTwo() {
  return <div className={globalStyles.contentWrapper}>
    <h1 className={styles.title}>Soy el layout 2</h1>
  </div>;
}
