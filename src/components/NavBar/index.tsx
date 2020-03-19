import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ExpandableMenu } from './ExpandableMenu';
import { ReactComponent as LogoIcon } from '@/components/SVGIcon/flow-logo-mono.svg';
import { ReactComponent as HamburguerIcon } from '@/components/SVGIcon/bars-solid.svg';
import { ReactComponent as CloseIcon } from '@/components/SVGIcon/times-solid.svg';

export function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav className={classNames(globalStyles.contentWrapper, styles.navbar, {[styles.expanded]: expanded})}>
        <Link to="/" className={styles.logo}><LogoIcon></LogoIcon></Link>
        <div className={styles.icon} onClick={() => setExpanded(!expanded)}>
          {expanded ? <CloseIcon className={globalStyles.icon}></CloseIcon> : <HamburguerIcon className={globalStyles.icon}></HamburguerIcon>}
        </div>
        <div className={styles.menu}>
          <Link to="/" className={styles.link}>Why Flow</Link>
          <Link to="/" className={styles.link}>Overview</Link>
          <Link to="/" className={styles.link}>Solutions</Link>
          <Link to="/layout-three" className={styles.link}>Pricing</Link>
          <ExpandableMenu></ExpandableMenu>
          <div className={styles.loginWrapper}>
            <Link to="/" className={styles.login}>Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
