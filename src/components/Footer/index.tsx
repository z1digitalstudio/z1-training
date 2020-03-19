import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/">For Teams</Link>
              <Link to="/">For Enterprise</Link>
              <Link to="/">Flow Solo</Link>
            </FooterColumn>
            <FooterColumn title="Results">
              <Link to="/">Customers</Link>
              <Link to="/">Reviews</Link>
              <Link to="/">Stories</Link>
            </FooterColumn>
            <FooterColumn title="Resources">
              <Link to="/">Download Flow</Link>
              <Link to="/">Integrations (New)</Link>
              <Link to="/">Developers</Link>
            </FooterColumn>
            <FooterColumn title="Support">
              <Link to="/">Get Help</Link>
              <Link to="/">Helpful Guides</Link>
              <Link to="/">Flow solo</Link>
            </FooterColumn>
            <FooterColumn title="Company">
              <Link to="/">Our Story</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Blog</Link>
            </FooterColumn>
          </div>
          <SubFooter></SubFooter>
        </div>
      </footer>
    </>
  );
}
