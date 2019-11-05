import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ExpandableMenu } from './ExpandableMenu';
import { ReactComponent as LogoIcon } from '@/components/SVGIcon/flow-logo-mono.svg';
import { ReactComponent as HamburguerIcon } from '@/components/SVGIcon/bars-solid.svg';
import { ReactComponent as CloseIcon } from '@/components/SVGIcon/times-solid.svg';
import { ReactComponent as CaretDown } from '@/components/SVGIcon/caret-down-solid.svg';

export function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav className={classNames(globalStyles.contentWrapper, styles.navbar, {[styles.expanded]: expanded})}>
        <Link to="/" className={styles.logo}><LogoIcon></LogoIcon></Link>
        <a href="#" className={styles.hamburguerIcon} onClick={() => setExpanded(!expanded)}>
          {expanded ? <CloseIcon></CloseIcon> : <HamburguerIcon></HamburguerIcon>}
        </a>
        <div className={styles.menu}>
          <a href="#" className={styles.link}>Why Flow</a>
          <a href="#" className={styles.link}>Overview</a>
          <a href="#" className={styles.link}>Solutions</a>
          <Link to="/layout-three" className={styles.link}>Pricing</Link>
          <ExpandableMenu></ExpandableMenu>
          <div className={styles.loginWrapper}>
            <a href="#" className={styles.login}>Login</a>
          </div>
        </div>
      </nav>
    </>
  );
}
