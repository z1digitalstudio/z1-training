import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { FooterColumn } from './FooterColumn';
import { SubFooter } from './SubFooter';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={globalStyles.contentWrapper}>
          <div className={styles.columns}>
            <FooterColumn title="Flow">
              <a href="#">For Teams</a>
              <a href="#">For Enterprise</a>
              <a href="#">Flow Solo</a>
            </FooterColumn>
            <FooterColumn title="Results">
              <a href="#">Customers</a>
              <a href="#">Reviews</a>
              <a href="#">Stories</a>
            </FooterColumn>
            <FooterColumn title="Resources">
              <a href="#">Download Flow</a>
              <a href="#">Integrations (New)</a>
              <a href="#">Developers</a>
            </FooterColumn>
            <FooterColumn title="Support">
              <a href="#">Get Help</a>
              <a href="#">Helpful Guides</a>
              <a href="#">Flow solo</a>
            </FooterColumn>
            <FooterColumn title="Company">
              <a href="#">Our Story</a>
              <a href="#">Contact Us</a>
              <a href="#">Blog</a>
            </FooterColumn>
          </div>
          <SubFooter></SubFooter>
        </div>
      </footer>
    </>
  );
}
