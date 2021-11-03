import React from 'react';
import { EmailModalContainer } from './styles.css';
import { TopBarContainer, MinButton, MaxButton, XButton } from '../TopBar/styles.css';
import YellowGuy from '../../assets/AOL-Instant-Messenger-icon-removebg-preview.png';
import GrayEmailContainer from './GrayEmail';
import { FixMe } from '../../types';

const EmailModal = ({handleEmailOpen}:FixMe) => (
  <EmailModalContainer>
		<TopBarContainer style={{height: '12.5%'}}>
      <img style={{height: '50%', marginTop: '4%', marginLeft: '1%'}} src={YellowGuy} alt="Yellow AOL Logo"/>
      <span style={{marginTop: '1%', marginLeft: '1%', cursor: 'default'}}>
        Email Me
      </span>
      <MinButton style={{height: '10%', width: '13%', paddingBottom: '5%', marginRight: '14%'}}>
			  <span style={{marginLeft: '3px'}}>
			    _
        </span>
      </MinButton>
      <MaxButton style={{marginRight: '7%', width: '13%', height: '10%'}}>
        <span style={{marginLeft: '-2px'}}>
          &#9723;
        </span>
      </MaxButton>
      <XButton onClick={handleEmailOpen} style={{cursor: 'pointer', width: '13%', height: '10%', paddingBottom: '5%', paddingTop: '2%'}}>
			  <span style={{marginLeft: '3px'}}>
          X
        </span>
      </XButton>
    </TopBarContainer>
		<GrayEmailContainer/>
	</EmailModalContainer>
);

export default EmailModal;