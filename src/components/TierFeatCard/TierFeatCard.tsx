import React from 'react';
import styles from './TierFeatCard.scss';
export default function TierFeatCard(props: any) {
  var imagen;
  if (props.img !== undefined) {
    imagen = <img src={props.img}></img>;
  } else {
    imagen = null;
  }

  return (
    <>
      <li>
        <span>{props.pretitle}</span>
        <br />
        <span className={styles.tierTitle}>
          {props.title}
          {imagen}
        </span>

        {props.children}
      </li>
    </>
  );
}
