import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Header } from '@/components/Header';
import { Fold } from '@/components/Fold';
import { Footer } from '@/components/Footer';
import { Cuadrado } from './Cuadrado';
import { SMS } from './SMS';
import { Download } from './Download';
import { ReactComponent as ArrowDown } from './arrow-down-solid.svg';
import { ReactComponent as CaretDown } from './caret-down-solid.svg';

export function LayoutFour() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <Header />
      </div>
      <Fold
        title="Flow for Mac"
        subtitle="Launch right from your dock and get desktop notifications."
        className={styles.fold}
      >
        <>
          <button className={styles.downloadButton}>
            <p className={styles.buttonText}>Download Flow for Mac</p>
            <ArrowDown className={styles.arrowIcon} />
          </button>
          <div className={styles.links}>
            <a href="" className={styles.link}>
              Versión 1.8.1
            </a>
            <button className={styles.changeButton}>
              <p className={styles.link}>Change Download</p>
              <CaretDown className={styles.caretIcon} />
            </button>
          </div>
        </>
      </Fold>
      <main className={`${styles.main} ${globalStyles.contentWrapper}`}>
        <Cuadrado className={styles.cuadrado} />
        <SMS />
      </main>
      <Download />
      <Footer />
    </>
  );
}
