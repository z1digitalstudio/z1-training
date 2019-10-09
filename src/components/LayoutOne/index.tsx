import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function LayoutOne() {
  return (
    <>
      <header>
        <div className={globalStyles.contentWrapper}>
          <h1 className={styles.title}>Nav bar</h1>
        </div>
      </header>
      <main>
        <div className={styles.background} />
        <div className={globalStyles.contentWrapper}>
          <p>Soy más contenido que tal</p>
        </div>
      </main>
      <footer className={globalStyles.contentWrapper}>
        <p>Footer</p>
      </footer>
    </>
  );
}
