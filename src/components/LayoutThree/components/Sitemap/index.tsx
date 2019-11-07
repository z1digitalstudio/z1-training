import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ChoicePlan } from '@/components/LayoutThree/components/ChoicePlan';
import { ChatModule } from '@/components/LayoutThree/components/ChatModule';
import { Banner } from '@/components/LayoutThree/components/Banner';
import { Organizations } from '@/components/LayoutThree/components/Organizations';
import { CommonQuestions } from '@/components/LayoutThree/components/CommonQuestions';

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
      <Banner />
      <div className={globalStyles.contentWrapper}>
        <div className={styles.organizations}>
          <Organizations />
        </div>
        <div className={styles.commonQuestions}>
          <CommonQuestions />
        </div>
      </div>
    </>
  );
}
