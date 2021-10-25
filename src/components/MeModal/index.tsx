import React from 'react';
import { MeModalContainer } from './styles.css';
import Bitmoji from '../../assets/unnamed-removebg-preview.png';
import { TopBarContainer, MinButton, MaxButton, XButton } from '../TopBar/styles.css';
import YellowGuy from '../../assets/AOL-Instant-Messenger-icon-removebg-preview.png';
import GrayModalInnerContainer from './GrayModalContainer';

const MeModal = () => {
  return (
    <>

    <MeModalContainer>
		<TopBarContainer style={{height: '12.5%'}}>
      <img style={{height: '50%', marginTop: '4%', marginLeft: '1%'}} src={YellowGuy} alt="Yellow AOL Logo"/>
      <span style={{marginTop: '1%', marginLeft: '1%', cursor: 'default'}}>
      Buddy List
      </span>
      <MinButton style={{height: '10%', width: '13%', paddingBottom: '5%', marginRight: '14%'}}>
			  <span style={{marginLeft: '3px'}}>
			    _
        </span>
      </MinButton>
      <MaxButton style={{marginRight: '7%', width: '13%', height: '10%'}} >
        <span style={{marginLeft: '-2px'}}>
          &#9723;
        </span>
      </MaxButton>
      <XButton style={{width: '13%', height: '10%', paddingBottom: '5%', paddingTop: '2%'}}>
			  <span style={{marginLeft: '3px'}}>
          X
        </span>
      </XButton>
    </TopBarContainer>

		<div style={{height: '300%', top: '64%', zIndex: 4000, position: 'absolute', color: 'rgb(2,71,254)', cursor: 'default', left: '-14%'}}>
			    <img style={{height: '12%'}} src={Bitmoji} alt="Bitmoji Me"/>
			  </div>

			<GrayModalInnerContainer>

			</GrayModalInnerContainer>
	  </MeModalContainer>

    </>
  );
}

export default MeModal;