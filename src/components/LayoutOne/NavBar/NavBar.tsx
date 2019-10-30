import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './NavBar.scss';
import { ReactComponent as LogoIcon } from '../SVGIcon/flow-logo-mono.svg';
import { ReactComponent as HamburguerIcon } from '../SVGIcon/bars-solid.svg';
import { ReactComponent as CaretDown } from '../SVGIcon/caret-down-solid.svg';

export function NavBar() {
  return (
    <>
      <nav className={classNames(globalStyles.contentWrapper, styles.navbar)}>
        <a href="#" className={styles.logo}><LogoIcon></LogoIcon></a>
        <a href="#" className={styles.hamburguerIcon}><HamburguerIcon></HamburguerIcon></a>
        <a href="#" className={styles.link}>Why flow</a>
        <a href="#" className={styles.link}>Overview</a>
        <a href="#" className={styles.link}>Solutions</a>
        <a href="#" className={styles.link}>Pricing</a>
        <a href="#" className={styles.link}>More <CaretDown className={styles.caretIcon}></CaretDown></a>
        <a href="#" className={styles.login}>Login</a>
      </nav>
    </>
  );
}
