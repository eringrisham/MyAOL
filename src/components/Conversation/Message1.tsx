import React from 'react';
import { FixMe } from '../../types';
import { ScreenNameSpan, MessageSpan } from './styles.css';

const Message1 = ({screenName}:FixMe) => {

  return (
		<>
			<ScreenNameSpan>
				{screenName}:
			</ScreenNameSpan>
			<MessageSpan>
			  hello
			</MessageSpan>
		</>
  );
}

export default Message1;