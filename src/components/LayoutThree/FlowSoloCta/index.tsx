import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as ArrowRightIcon } from '@/components/SVGIcon/arrow-right-solid.svg';

export function FlowSoloCta() {
  return (
    <>
      <div className={classNames(globalStyles.contentPaddingWrapper, styles.ctaWrapper)}>
        <div className={classNames(globalStyles.contentWrapper, styles.ctaContainer)}>
          <h2 className={styles.title}>Looking for personal task management?</h2>
          <a href="#" className={styles.button}><span>Try Flow Solo</span><ArrowRightIcon></ArrowRightIcon></a>
        </div>
      </div>
    </>
  );
}