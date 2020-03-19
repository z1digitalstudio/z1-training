import React from 'react';
import styles from './TierFeatCard.scss';

interface Props {
  img?: string;
  pretitle?: string;
  title?: string;
  children?: React.ReactNode;
}

export default function TierFeatCard({
  img,
  title,
  pretitle,
  children,
}: Props) {
  var imagen;
  if (img !== undefined) {
    imagen = <img src={img}></img>;
  } else {
    imagen = null;
  }

  return (
    <>
      <li>
        <span>{pretitle}</span>
        <br />
        <span className={styles.tierTitle}>
          {title}
          {imagen}
        </span>

        {children}
      </li>
    </>
  );
}
