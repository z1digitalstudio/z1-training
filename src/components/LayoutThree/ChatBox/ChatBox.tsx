import React from 'react';
import Button from '@/components/Common/Button/Button';
import CardChatModule from './CardChatModule/CardChatModule';
import globalStyles from '@/styles/global.scss';

export default function ChatBox() {
  return (
    <div className={globalStyles.contentWrapper}>
      <CardChatModule title="Chat Module" subtitle="99c per user per month">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi
          turpis, sollicitudin eu vulputate non, tempor eget massa. Pellentesque
          id ornare lorem.
        </span>
        <Button value="Learn More"></Button>
      </CardChatModule>
    </div>
  );
}
