import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as CaretDown } from './caret-down-solid.svg';
import globalStyles from '@/styles/global.scss';

export function Footer() {
  return (
    <footer className={globalStyles.contentWrapper}>
      <div className={styles.nav}>
        <nav className={styles.navElement}>
          <strong className={styles.navTitle}>Tofu</strong>
          <a>For Teams</a>
          <a>For Enterprise</a>
          <a>Tofu Solo</a>
        </nav>
        <nav className={styles.navElement}>
          <strong className={styles.navTitle}>Results</strong>
          <a>Customers</a>
          <a>Reviews</a>
          <a>Stories</a>
        </nav>
        <nav className={styles.navElement}>
          <strong className={styles.navTitle}>Resources</strong>
          <a>Download Tofu</a>
          <a>Integrations (New)</a>
          <a>Developers</a>
        </nav>
        <nav className={styles.navElement}>
          <strong className={styles.navTitle}>Support</strong>
          <a>Get Help</a>
          <a>Helpful Guides</a>
          <a>Tutorials (New)</a>
        </nav>
        <nav className={styles.navElement}>
          <strong className={styles.navTitle}>Company</strong>
          <a>Our Story</a>
          <a>Contact Us</a>
          <a>Blog</a>
        </nav>
      </div>
      <div className={styles.infoBottom}>
        <div className={styles.rights}>
          © 2019 Tofu Technologies Ltd. All rights reserved.
        </div>
        <ul className={styles.bottomLinks}>
          <li>
            <a href="#">Privacy &amp; Terms</a>
          </li>
          <li>
            <a href="#">Service Status</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#" className={styles.languageDropdown}>
              <span>English</span>
              <CaretDown />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
