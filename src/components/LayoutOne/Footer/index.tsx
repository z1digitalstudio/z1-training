import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as CaretDown } from './caret-down-solid.svg';
import { ReactComponent as AngleDown } from './angle-down-solid.svg';
import globalStyles from '@/styles/global.scss';

export function Footer() {
  return (
    <footer className={globalStyles.contentWrapper}>
      <div className={styles.nav}>
        <nav className={styles.navElement}>
          <div className={styles.cardHeader}>
            <strong className={styles.navTitle}>Tofu</strong>
            <AngleDown />
          </div>
          <div className={styles.cardBody}>
            <a>For Teams</a>
            <a>For Enterprise</a>
            <a>Tofu Solo</a>
          </div>
        </nav>
        <nav className={styles.navElement}>
          <div className={styles.cardHeader}>
            <strong className={styles.navTitle}>Results</strong>
            <AngleDown />
          </div>
          <div className={styles.cardBody}>
            <a>Customers</a>
            <a>Reviews</a>
            <a>Stories</a>
          </div>
        </nav>
        <nav className={styles.navElement}>
          <div className={styles.cardHeader}>
            <strong className={styles.navTitle}>Resources</strong>
            <AngleDown />
          </div>
          <div className={styles.cardBody}>
            <a>Download Tofu</a>
            <a>Integrations (New)</a>
            <a>Developers</a>
          </div>
        </nav>
        <nav className={styles.navElement}>
          <div className={styles.cardHeader}>
            <strong className={styles.navTitle}>Support</strong>
            <AngleDown />
          </div>
          <div className={styles.cardBody}>
            <a>Get Help</a>
            <a>Helpful Guides</a>
            <a>Tutorials (New)</a>
          </div>
        </nav>
        <nav className={styles.navElement}>
          <div className={styles.cardHeader}>
            <strong className={styles.navTitle}>Company</strong>
            <AngleDown />
          </div>
          <div className={styles.cardBody}>
            <a>Our Story</a>
            <a>Contact Us</a>
            <a>Blog</a>
          </div>
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
          <li className={styles.languageWrapper}>
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
