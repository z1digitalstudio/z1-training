import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ChoicePlan } from '@/components/LayoutThree/components/ChoicePlan';
import { ChatModule } from '@/components/LayoutThree/components/ChatModule';

export function Sitemap() {
  return (
    <>
      <div className={styles.borderBar}></div>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.choicePlan}>
          <ChoicePlan />
        </div>
        <div className={styles.chatModule}>
          <ChatModule />
        </div>
      </div>
    </>
  );
}
