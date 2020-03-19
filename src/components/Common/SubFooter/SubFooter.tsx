import React from 'react';
import { Link } from '../../LayoutOne/Link/Link';
import styles from './SubFooter.scss';

export default function LayoutOne() {
  return (
    <div className={styles.subFooterContainer}>
      <Link>© 2019 Flow Technologies Ltd. All rights reserved.</Link>
      <Link>Privacy & Terms</Link>
      <Link>Service Status</Link>
      <Link>Site Map</Link>
      <Link>English</Link>
    </div>
  );
}
