import React from 'react';
import styles from './CardChatModule.scss';

export default function CardChatModule(props: any) {
  return (
    <div className={styles.contentCharModule}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      {props.children}
    </div>
  );
}
