import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ReactComponent as CaretDown } from '@/components/SVGIcon/caret-down-solid.svg';
import { ReactComponent as CaretUp } from '@/components/SVGIcon/caret-up-solid.svg';

export function ExpandableMenu(props: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.text} onClick={() => setExpanded(!expanded)}>More{expanded ? <CaretUp className={styles.icon}></CaretUp> : <CaretDown className={styles.icon}></CaretDown>}</p>
        <div className={classNames(styles.menuWrapper, {[styles.expanded]: expanded})}>
          <div className={styles.hoverHelper}></div>
          <div className={styles.menuContainer}>
            <div className={styles.menuSection}>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Customers</Link>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Integrations</Link>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Enterprise</Link>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Security</Link>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Download</Link>
            </div>
            <div className={styles.menuSection}>
              <p className={styles.menuSectionTitle}>Learn flow</p>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Getting Started</Link>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Tutorials</Link>
            </div>
            <div className={styles.menuSection}>
              <Link to="/" className={styles.menuLink}><div className={styles.navigationIcon}></div>Get Help</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
