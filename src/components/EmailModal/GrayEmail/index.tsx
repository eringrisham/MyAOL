import React from 'react';
import { GrayModalContainerStyle } from './styles.css';
import WhiteEmailArea from '../WhiteEmailArea';
import { FixMe } from '../../../types';

const GrayEmailContainer = (props:FixMe) => (
	<GrayModalContainerStyle>
		<span style={{marginLeft: '1%', wordSpacing: '20px', cursor: 'default'}}>
			MyAIM People Help
		</span>
		<hr/>
		<WhiteEmailArea/>
	</GrayModalContainerStyle>
);

export default GrayEmailContainer;