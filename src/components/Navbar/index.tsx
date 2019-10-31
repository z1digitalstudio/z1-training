import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg';
import { ReactComponent as Hamburguer } from '@/assets/icons/hamburguer.svg';

import { Dropdown } from '@/components/ui/Dropdown';

export function Navbar() {
  return (
    <>
      <nav className={styles.list}>
        <a href="#" className={styles.logo}>
          <LogoIcon />
        </a>
        <a href="#" className={styles.hamburger}>
          <Hamburguer />
        </a>
        <a className={styles.item} href="#">
          <span>Why Flow</span>
        </a>
        <a className={styles.item} href="#">
          <span>Overview</span>
        </a>
        <a className={styles.item} href="#">
          <span>Solutions</span>
        </a>
        <a className={styles.item} href="#">
          <span>Pricing</span>
        </a>
        <a className={styles.item} href="#">
          <span>
            <Dropdown title="More" />
          </span>
        </a>
        <a href="#" className={styles['login-wrapper']}>
          <span>Login</span>
        </a>
      </nav>
    </>
  );
}
