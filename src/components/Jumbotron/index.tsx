import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function Jumbotron(props: any) {
  return (
    <>
      <div className={classNames(styles.jumbotron, globalStyles.contentPaddingWrapper)}>
        <h1 className={styles.jumbotronTitle}>{props.title}</h1>
        <p className={styles.jumbotronSubtitle}>{props.subtitle}</p>
      </div>
    </>
  );
}
