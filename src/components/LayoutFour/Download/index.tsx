import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as Windows } from './windows-brands.svg';
import { ReactComponent as Apple } from './apple-brands.svg';
import { ReactComponent as PlayStore } from './google-play-brands.svg';
import { ReactComponent as AppleStore } from './app-store-ios-brands.svg';

export function Download() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Quickly download any of our apps</h2>
      <div className={styles.buttons}>
        <div className={styles.buttonsLeftIpad}>
          <button className={styles.button}>
            <AppleStore className={styles.icon} />
            <p className={styles.buttonText}>App Store</p>
          </button>
          <button className={styles.button}>
            <PlayStore className={styles.icon} />
            <p className={styles.buttonText}>Play Store</p>
          </button>
        </div>
        <div className={styles.buttonsRightIpad}>
          <button className={styles.button}>
            <Apple className={styles.icon} />
            <p className={styles.buttonText}>Mac App</p>
          </button>
          <button className={styles.button}>
            <Windows className={styles.icon} />
            <p className={styles.buttonText}>Windows App</p>
          </button>
        </div>
      </div>
    </div>
  );
}
