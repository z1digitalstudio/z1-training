import React, { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as CaretDown } from './caret-down-solid.svg';
import { ReactComponent as AngleUp } from './angle-up-solid.svg';
import globalStyles from '@/styles/global.scss';

export function Footer() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
      <div className={styles.separator} />
      <footer className={globalStyles.contentWrapper}>
        <div className={styles.nav}>
          <nav
            className={classNames(styles.navElement, {
              [styles.cardBodyClosed]: isClosed,
            })}
            onClick={() => setIsClosed(!isClosed)}
          >
            <div className={styles.cardHeader}>
              <strong className={styles.navTitle}>Tofu</strong>
              <AngleUp />
            </div>
            <div className={styles.cardBody}>
              <a href="#">For Teams</a>
              <a href="#">For Enterprise</a>
              <a href="#">Tofu Solo</a>
            </div>
          </nav>
          <nav className={`${styles.navElement} ${styles.cardBodyClosed}`}>
            <div className={styles.cardHeader}>
              <strong className={styles.navTitle}>Results</strong>
              <AngleUp />
            </div>
            <div className={styles.cardBody}>
              <a href="#">Customers</a>
              <a href="#">Reviews</a>
              <a href="#">Stories</a>
            </div>
          </nav>
          <nav className={`${styles.navElement} ${styles.cardBodyClosed}`}>
            <div className={styles.cardHeader}>
              <strong className={styles.navTitle}>Resources</strong>
              <AngleUp />
            </div>
            <div className={styles.cardBody}>
              <a href="#">Download Tofu</a>
              <a href="#">Integrations (New)</a>
              <a href="#">Developers</a>
            </div>
          </nav>
          <nav className={styles.navElement}>
            <div className={styles.cardHeader}>
              <strong className={styles.navTitle}>Support</strong>
              <AngleUp />
            </div>
            <div className={styles.cardBody}>
              <a href="#">Get Help</a>
              <a href="#">Helpful Guides</a>
              <a href="#">Tutorials (New)</a>
            </div>
          </nav>
          <nav className={styles.navElement}>
            <div className={styles.cardHeader}>
              <strong className={styles.navTitle}>Company</strong>
              <AngleUp />
            </div>
            <div className={styles.cardBody}>
              <a href="#">Our Story</a>
              <a href="#">Contact Us</a>
              <a href="#">Blog</a>
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
              <ul className={styles.dropdown}>
                <li>
                  <a href="#">Spanish</a>
                </li>
                <li>
                  <a href="#">Italian</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
