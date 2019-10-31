import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function SubFooter() {
  return (
    <div className={styles.subfooter}>
      <p>© 2019 Flow Technologies Ltd. All rights reserved.</p>
      <div className={styles.linksContainer}>
        <a href="#">Privacy & Terms</a>
        <a href="#">Service Status</a>
        <Link to="/layout-one">Site Map</Link>
        <select className={styles.language} defaultValue="eng">
          <option disabled>Language</option>
          <option value="eng">English</option>
        </select>
      </div>
    </div>
  );
}