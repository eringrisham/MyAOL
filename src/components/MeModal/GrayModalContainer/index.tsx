import React from 'react';
import { GrayModalContainerStyle } from './styles.css';
import WhiteTextArea from '../WhiteTextArea';
import { FixMe } from '../../../types';

const GrayModalInnerContainer = (props:FixMe) => (
	<GrayModalContainerStyle>
		<span style={{marginLeft: '1%', wordSpacing: '20px', cursor: 'default'}}>
			MyAIM People Help
		</span>
		<hr/>
		<WhiteTextArea/>
	</GrayModalContainerStyle>
);

export default GrayModalInnerContainer;