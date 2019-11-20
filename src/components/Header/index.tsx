import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Logo } from './flow-logo-mono.svg';
import { ReactComponent as DropdownIcon } from './caret-down-solid.svg';
import { ReactComponent as Menu } from './equals-solid.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <nav className={styles.navBar}>
        <Logo className={styles.logo} />
        <div className={styles.linksHeader}>
          <Link to="/layout-one" className={styles.linkItem}>
            Why Flow
          </Link>
          <Link to={'/layout-two'} className={styles.linkItem}>
            Overview
          </Link>
          <Link to={'/layout-three'} className={styles.linkItem}>
            Solutions
          </Link>
          <Link to={'/layout-four'} className={styles.linkItem}>
            Pricing
          </Link>
          <div>
            <li>
              <div className={styles.more}>
                <a href={''} className={styles.linkItem}>
                  More
                </a>
                <DropdownIcon className={styles.dropdownIcon} />
              </div>
              <ul>
                <li>
                  <a href={''} className={styles.linkItem}>
                    A
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkItem}>
                    B
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkItem}>
                    C
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkItem}>
                    D
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.hamburger}>
          <Menu className={styles.equals} />
        </button>
      </nav>
    </>
  );
}
