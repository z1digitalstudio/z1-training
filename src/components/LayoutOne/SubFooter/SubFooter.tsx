import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './SubFooter.scss';


export function SubFooter() {
  return (
    <div className={styles.subfooter}>
      <p>© 2019 Flow Technologies Ltd. All rights reserved.</p>
      <div className={styles.linksContainer}>
        <a href="#">Privacy & Terms</a>
        <a href="#">Service Status</a>
        <a href="#">Site Map</a>
        <select className={styles.language} defaultValue="eng">
          <option disabled>Language</option>
          <option value="eng">English</option>
        </select>
      </div>
    </div>
  );
}