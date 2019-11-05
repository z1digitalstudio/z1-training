import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as ArrowRightIcon } from '@/components/SVGIcon/arrow-right-solid.svg';

export function ChatModule() {
  return (
    <>
      <div className={classNames(globalStyles.contentPaddingWrapper, styles.chatContainer)}>
        <div className={styles.chatContent}>
          <div className={styles.navigationAvatar}></div>
          <h3 className={styles.title}>Chat module</h3>
          <h4 className={styles.subtitle}>99¢ per user per month</h4>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi turpis, sollicitudin eu vulputate non, tempor eget massa. Pellentesque id ornare lorem.</p>
          <a href="#" className={styles.button}><span>Learn More</span><ArrowRightIcon className={styles.buttonIcon}></ArrowRightIcon></a>
        </div>
      </div>
    </>
  );
}
