import React from 'react';
import { ColumnMenu } from '../ColumnMenu/ColumnMenu';
import globalStyles from '@/styles/global.scss';

export default function Sitemap() {
  return (
    <div className={globalStyles.contentWrapper}>
      <ColumnMenu />
    </div>
  );
}
