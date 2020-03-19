import React from 'react';
import styles from './Link.scss';
import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function Link({ children, className }: Props) {
  return (
    <span className={classNames(styles.urlLink, className)}>{children}</span>
  );
}
