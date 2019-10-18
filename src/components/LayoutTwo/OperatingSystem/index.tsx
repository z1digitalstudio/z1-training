import React from 'react';
import styles from './styles.module.scss';

interface Props {
  os: string;
  description: string;
  dateTimeAttribute: string;
  date: string;
  added: string;
  fixed: string;
  improved: string;
}

export function OperatingSystem({
  os,
  description,
  dateTimeAttribute,
  date,
  added,
  fixed,
  improved,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.operatingSystem}>
        <h2 className={styles.title}>Flow {os}</h2>
        <p className={styles.description}>{description}</p>
        <time dateTime={dateTimeAttribute} className={styles.date}>
          {date}
        </time>
      </div>

      <div className={styles.changesInfo}>
        <h3 className={styles.titleList}>Added</h3>
        <ul className={styles.list}>
          <li>{added}</li>
        </ul>
        <h3 className={styles.titleList}>Fixed</h3>
        <ul className={styles.list}>
          <li>{fixed}</li>
        </ul>
        <h3 className={styles.titleList}>Improved</h3>
        <ul className={styles.list}>
          <li>{improved}</li>
        </ul>
      </div>
    </div>
  );
}
