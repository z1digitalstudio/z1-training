import React from 'react';
import styles from './styles.module.scss';

interface Props {
  icon?: string;
  os: string;
  description: string;
  dateTimeAttribute: string;
  date: string;
  added: string[];
  fixed: string[];
  improved: string[];
}

export function OperatingSystem({
  icon,
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
        <h2 className={styles.title}>
          <img className={styles.logo} src={icon} alt="Operating system icon" />
          Flow {os}
        </h2>
        <p className={styles.description}>{description}</p>
        <time dateTime={dateTimeAttribute} className={styles.date}>
          {date}
        </time>
      </div>

      <div className={styles.changesInfo}>
        <h3 className={styles.titleList}>Added</h3>
        <ul className={styles.list}>
          {added && added.map((add, i) => <li key={i}> {add} </li>)}
        </ul>
        <h3 className={styles.titleList}>Fixed</h3>
        <ul className={styles.list}>
          {fixed && fixed.map((fix, i) => <li key={i}> {fix} </li>)}
        </ul>
        <h3 className={styles.titleList}>Improved</h3>
        <ul className={styles.list}>
          {improved && improved.map((imp, i) => <li key={i}> {imp} </li>)}
        </ul>
      </div>
    </div>
  );
}
