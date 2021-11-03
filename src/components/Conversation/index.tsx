import React, { useState, useEffect, useCallback } from 'react';
import { ConversationContainer } from './styles.css'
import Message1 from './Message1';
import Message2 from './Message2';
import Message3 from './Message3';

const Conversation = () => {

	const messages = ['hello', 'welcome to my site!', 'feel free to click around :)'];

	const [screenName] = useState<string>('xXeringrishamXx');
	let [messageIndex, setMessageIndex] = useState<number>(0);

	const displayMessages = useCallback(() => {

		const timer: ReturnType<typeof setTimeout> = setInterval(() => setMessageIndex(messageIndex + 1), 2000);

		if (messageIndex === messages.length - 1) {
			clearInterval(timer);
		}
	}, [messageIndex, messages.length]);

	useEffect(() => {

		displayMessages();

	}, [displayMessages]);



//**WHAT I TRIED */
	// useEffect(() => {
	// 	if (messageIndex <= messages.length - 1) {
	// 		const timer: ReturnType<typeof setTimeout> = setInterval(() => setMessageIndex(messageIndex + 1), 2000);
	// 		return () => clearInterval(timer);
	// 	}
	// })

  return (
    <ConversationContainer>
			{messageIndex <= 2 ? (<Message1 screenName={screenName} />) : null}
			<br/>
			{(messageIndex === 1 || messageIndex === 2) ? (<Message2 screenName={screenName} />) : null}
			<br/>
			{messageIndex === 2 ? (<Message3 screenName={screenName} />) : null}
			<br/>
    </ConversationContainer>
  );
}

export default Conversation;