import React from 'react';
import { ConversationContainer, MessageSpan } from './styles.css';

const WhiteTextArea = () => {
  return (
    <ConversationContainer>
			<MessageSpan>
			  My name is Erin Grisham. I'm a
			</MessageSpan>
			<br/>
			<MessageSpan>
			  full stack software engineer living in
			</MessageSpan>
			<br/>
			<MessageSpan>
				NYC! Here's a little bit about me...
			</MessageSpan>
			<br/>
			<br/>
			<MessageSpan>
        1. I've lived in 8 states.
			</MessageSpan>
			<br/>
			<MessageSpan>
        2. I have a cat named Puppy.
			</MessageSpan>
			<br/>
			<MessageSpan>
        3. I've worked as a TV news producer
			</MessageSpan>
			<br/>
			<MessageSpan style={{paddingLeft: '6%'}}>
			& a pricing analyst.
			</MessageSpan>
			<br/>
			<MessageSpan>
			4. My favorite hobbies are hiking,
			</MessageSpan>
			<br/>
			<MessageSpan style={{paddingLeft: '6%'}}>
			eating & traveling (often together).
			</MessageSpan>
			<br/>
			<br/>
			<MessageSpan style={{paddingLeft: '29%'}}>
			Email me:
			</MessageSpan>
			<br/>
			<MessageSpan style={{paddingLeft: '29%'}}>
			erinmgrisham@gmail.com
			</MessageSpan>

		</ConversationContainer>
  );
}

export default WhiteTextArea;