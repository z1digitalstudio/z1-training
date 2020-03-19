import React from 'react';
import styles from './styles.module.scss';

interface AvatarProps {
  color?: string;
  width?: number;
  height?: number;
}
export function Avatar({ color='#dee2e6', width=70, height=70 }: AvatarProps) {
  const avatarStyles = {
    backgroundColor: color,
    height: height + 'px',
    width: width + 'px',
  };

  return (
    <div className={styles.avatar} style={avatarStyles}>
    </div>
  );
}
