import React, { useState } from 'react';
import { ChatContainer } from './styles.css'
import TopBar from '../TopBar';
import GrayInnerContainer from '../GrayContainer';
import MeModal from '../MeModal';

const App = () => {

  const [open, modalToggle] = useState(false);

  const handleModalToggle = () => {
    modalToggle(!open);
  }

  return (
    <>
    <ChatContainer>
      <TopBar/>
      <GrayInnerContainer handleOpen={handleModalToggle} />
    </ChatContainer>
    {open && <MeModal/>}
    </>
  );
}

export default App;
