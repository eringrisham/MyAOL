import React from 'react';
import { FixMe } from '../../types';
import { ScreenNameSpan, MessageSpan } from './styles.css';

const Message3 = ({screenName}:FixMe) => {

  return (
		<>
			<ScreenNameSpan>
				{screenName}:
			</ScreenNameSpan>
			<MessageSpan>
			  feel free to click around :D
			</MessageSpan>
		</>
  );
}

export default Message3;