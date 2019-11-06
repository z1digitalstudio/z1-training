import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { JumbotronCard } from '@/components/ui/jumbotron-card';

interface JumbotronProps {
  title: string;
  subtitle: string;
  width?: number;
  withCard?: boolean;
}

export function Jumbotron({
  title,
  subtitle,
  width = 626,
  withCard = false,
}: JumbotronProps) {
  const customStyle = {
    maxWidth: width + 'px',
  };
  return (
    <>
      <div className={styles['border-bar']}></div>
      <div
        className={classNames(styles.jumbotron, {
          [styles['with-card']]: withCard,
        })}
      >
        <h1>{title}</h1>
        <p style={customStyle}>{subtitle}</p>
        <div className={styles.card}>
          <JumbotronCard />
        </div>
      </div>
    </>
  );
}
