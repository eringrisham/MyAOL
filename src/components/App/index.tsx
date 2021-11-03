import React, { useState } from 'react';
import { ChatContainer } from './styles.css'
import TopBar from '../TopBar';
import GrayInnerContainer from '../GrayContainer';
import MeModal from '../MeModal';
import EmailModal from '../EmailModal';

const App = () => {

  const [openMeModal, meModalToggle] = useState(false);

  const [openEmailModal, emailModalToggle] = useState(false);

  const handleAboutMeModalToggle = () => {
    meModalToggle(!openMeModal);
  }

  const handleEmailModalToggle = () => {
    emailModalToggle(!openEmailModal);
  }

  return (
    <div className="grid-container">
      <div className="item1">
        {openMeModal && <MeModal handleAboutMeOpen={handleAboutMeModalToggle}/>}
      </div>
      <div className="item2">
        <ChatContainer>
          <TopBar/>
          <GrayInnerContainer handleAboutMeOpen={handleAboutMeModalToggle} handleEmailOpen={handleEmailModalToggle}/>
        </ChatContainer>
      </div>
      <div className="item3">
        {openEmailModal && <EmailModal handleEmailOpen={handleEmailModalToggle}/>}
      </div>
    </div>
  );
}

export default App;
