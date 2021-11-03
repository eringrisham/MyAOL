import React from 'react';
import { TopBarContainer, MinButton, MaxButton, XButton } from './styles.css';
import YellowGuy from '../../assets/AOL-Instant-Messenger-icon-removebg-preview.png';

const TopBar = () => (
  <TopBarContainer>
    <img style={{height: '50%', marginTop: '2%', marginLeft: '1%'}} src={YellowGuy} alt="Yellow AOL Logo"/>
    <span style={{marginTop: '1%', marginLeft: '1%', cursor: 'default'}}>
      Instant Message
    </span>
    <MinButton style={{paddingBottom: '5%'}}>
      _
    </MinButton>
    <MaxButton>
      <span style={{marginLeft: '-4px'}}>
      &#9723;
      </span>
    </MaxButton>
    <XButton>
      X
    </XButton>
  </TopBarContainer>
);

export default TopBar;