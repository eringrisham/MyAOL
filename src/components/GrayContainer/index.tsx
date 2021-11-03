import React from 'react';
import { GrayContainer } from './styles.css';
import Conversation from '../Conversation';
import TextInput from '../TextInput';
import IconBar from '../IconBar';
import BottomIcons from '../BottomIcons';
import { FixMe } from '../../types';

const GrayInnerContainer = ({handleAboutMeOpen, handleEmailOpen}:FixMe) => (
	<GrayContainer>
		<span style={{marginLeft: '1%', wordSpacing: '20px', cursor: 'default'}}>
			File Edit Insert People
		</span>
		<hr/>
		<Conversation/>
		<IconBar/>
		<TextInput/>
		<BottomIcons handleAboutMeOpen={handleAboutMeOpen} handleEmailOpen={handleEmailOpen}/>
	</GrayContainer>
);

export default GrayInnerContainer;
