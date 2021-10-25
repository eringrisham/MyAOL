import React from 'react';
import { FixMe } from '../../types';
import { ScreenNameSpan, MessageSpan } from './styles.css';

const Message2 = ({screenName}:FixMe) => {

  return (
		<>
			<ScreenNameSpan>
				{screenName}:
			</ScreenNameSpan>
			<MessageSpan>
			  welcome to my site!
			</MessageSpan>
		</>
  );
}

export default Message2;