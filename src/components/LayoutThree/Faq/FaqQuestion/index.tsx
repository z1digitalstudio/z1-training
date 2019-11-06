import React, { useState } from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as AngleDownIcon } from '@/components/SVGIcon/angle-down-solid.svg';
import { ReactComponent as AngleUpIcon } from '@/components/SVGIcon/angle-up-solid.svg';

export function FaqQuestion(props: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.questionHeader} onClick={() => setExpanded(!expanded)}>
          <h3>{props.question}</h3>
          {expanded ? <AngleUpIcon className={classNames(globalStyles.icon, styles.icon)}></AngleUpIcon> : <AngleDownIcon className={classNames(globalStyles.icon, styles.icon)}></AngleDownIcon>}
        </div>
        {expanded && <div className={styles.questionContent}>
          {props.answer}
        </div>}
      </div>
    </>
  );
}