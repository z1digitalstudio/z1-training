import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { QUESTIONS_LIST } from '@/components/LayoutThree/components/CommonQuestions/questions';
import { Collapse } from '@/components/ui/Collapse';

export function CommonQuestions() {
  const stylesTitleCollapse = {
    color: '#495057',
    fontFamily: 'Bookmania',
    fontSize: '18px',
    letterSpacing: '0.44px',
    lineHeight: '25px',
    padding: '20px 21px',
  };
  const extraStyleIcon = {
    paddingRight: '10px',
  };
  return (
    <>
      <div className={styles.commonQuestionsWrapper}>
        <p className={styles.title}>Common questions</p>
        {QUESTIONS_LIST.map((value, index) => {
          return (
            <div key={index} className={styles.list}>
              <p className={styles.listTitle}>{value.title}</p>
              {value.items.map((value, index) => {
                return (
                  <Collapse
                    key={index}
                    title={value.title}
                    isList={false}
                    message={value.text}
                    selected={value.active}
                    withBorderTop={index === 0}
                    styleTitle={stylesTitleCollapse}
                    extraStyleIcon={extraStyleIcon}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
