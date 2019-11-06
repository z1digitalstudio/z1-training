import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function SubFooter() {
  return (
    <div className={styles.subfooter}>
      <p>© 2019 Flow Technologies Ltd. All rights reserved.</p>
      <div className={styles.linksContainer}>
        <Link to="/">Privacy & Terms</Link>
        <Link to="/">Service Status</Link>
        <Link to="/layout-one">Site Map</Link>
        <select className={styles.language} defaultValue="eng">
          <option disabled>Language</option>
          <option value="eng">English</option>
        </select>
      </div>
    </div>
  );
}