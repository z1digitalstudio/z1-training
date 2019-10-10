import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function LayoutOne() {
  return (
    <>
      <header>
        <div className={`${globalStyles.contentWrapper} ${styles.header}`}>
          <div className={styles.logo}>
            <a href="#">
              <img
                src="img/tofulogobn.png"
                alt="Tofu logo"
                height="100"
                width="100"
              />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Why Tofu</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </nav>
          <button className={styles.loginButton}>Login</button>
        </div>
      </header>
      <main>
        <div className={styles.background}>
          <h1>Tofu Site Map</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        <div className={globalStyles.contentWrapper}>
          <section>
            <h4>Homepage</h4>
            <nav className={styles.contentNav}>
              <strong>Choose Tofu</strong>
              <a>Why Tofu</a>
              <a>Features</a>
              <a>Pricing</a>
              <a>Security</a>
              <a>Updates</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Tofu</strong>
              <a>For Teams</a>
              <a>For Enterprise</a>
              <a>Tofu Chat</a>
              <a>Tofu Solo</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Results</strong>
              <a>Customers</a>
              <a>Reviews</a>
              <a>Stories</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Resources</strong>
              <a>Download Tofu</a>
              <a>Integrations</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Support</strong>
              <a>Get Help</a>
              <a>Getting Started</a>
              <a>Tutorials</a>
              <a>Helpful Guides</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Developers</strong>
              <a>Developing for Tofu</a>
              <a>API Documentation</a>
              <a>Site Status</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Company</strong>
              <a>Our Story</a>
              <a>Contact Us</a>
              <a>Careers</a>
              <a>Blog</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Tofu for...</strong>
              <a>Tofu for Education</a>
              <a>Tofu for Nonprofits</a>
              <a>Tofu for Makers</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Tofu Legal</strong>
              <a>Legal</a>
              <a>Terms of Service</a>
              <a>Privacy Policy</a>
              <a>Acceptable Use Policy</a>
              <a>Subprocessors</a>
            </nav>
          </section>
        </div>
      </main>
      <footer className={globalStyles.contentWrapper}>
        <div className={styles.footerNav}>
          <nav className={styles.footerNavElem}>
            <strong>Tofu</strong>
            <a>For Teams</a>
            <a>For Enterprise</a>
            <a>Tofu Solo</a>
          </nav>
          <nav className={styles.footerNavElem}>
            <strong>Results</strong>
            <a>Customers</a>
            <a>Reviews</a>
            <a>Stories</a>
          </nav>
          <nav className={styles.footerNavElem}>
            <strong>Resources</strong>
            <a>Download Tofu</a>
            <a>Integrations (New)</a>
            <a>Developers</a>
          </nav>
          <nav className={styles.footerNavElem}>
            <strong>Support</strong>
            <a>Get Help</a>
            <a>Helpful Guides</a>
            <a>Tutorials (New)</a>
          </nav>
          <nav className={styles.footerNavElem}>
            <strong>Company</strong>
            <a>Our Story</a>
            <a>Contact Us</a>
            <a>Blog</a>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <div>© 2019 Tofu Technologies Ltd. All rights reserved.</div>
          <ul>
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
              <a href="#">Dropdown</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
