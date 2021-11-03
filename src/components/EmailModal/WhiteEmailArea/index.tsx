import React, { useRef, useState } from 'react';
import { ConversationContainer, MessageSpan } from './styles.css';
import emailjs from 'emailjs-com';
import { FixMe } from '../../../types';
import { AiOutlineSend } from "react-icons/ai";

const WhiteEmailArea = () => {

	let form = useRef<HTMLFormElement>(document.createElement('form'));

	const [input, setInput] = useState({user_name: '', user_email: '', message: ''});

  const sendEmail = (e:FixMe) => {
    e.preventDefault();

    emailjs.sendForm('service_yrbettz', 'template_sxukl1k', form.current, 'user_7SIkvgXVshC4MC4XNvpjt')
      .then(result => {
				alert('Message received! Thank you :)')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

	const handleChange = (e:FixMe) => {
		let target = e.target as HTMLFormElement;
		setInput({...input, [target.name]: target.value});
	}

	const handleSubmit = (e:FixMe) => {
		sendEmail(e);
    setInput({user_name: '', user_email: '', message: ''});
	}

  return (
    <ConversationContainer>
			<MessageSpan>
				<form style={{marginLeft: '10%'}} ref={form} onSubmit={sendEmail}>
				<label aria-labelledby='username' style={{fontWeight: 'bold'}}>Your Name</label>
				<br/>
				<input onChange={handleChange} value={input.user_name} style={{width: '85%', fontFamily: 'inherit', fontSize: '16px'}} type="text" name="user_name" aria-label='username'/>
				<br/>
				<br/>
				<label aria-labelledby='email' style={{fontWeight: 'bold'}}>Your Email</label>
				<br/>
				<input onChange={handleChange} value={input.user_email} style={{width: '85%', fontFamily: 'inherit', fontSize: '16px'}} type="email" name="user_email" aria-label='email'/>
				<br/>
				<br/>
				<label aria-labelledby='message' style={{fontWeight: 'bold'}}>Message</label>
				<br/>
				<textarea onChange={handleChange} value={input.message} style={{width: '85%', height: '70px', fontFamily: 'inherit', fontSize: '16px'}} name="message" aria-label='message'/>
				<br/>
				<button onClick={handleSubmit} style={{width: '40%', fontFamily: 'inherit', fontSize: '24px', fontWeight: 'bold'}} type="submit" value="Send">
				  Send
					<span style={{marginLeft: '8%'}}>
					  <AiOutlineSend size={20} style={{color: 'rgb(2,71,254)'}}/>
					</span>
				</button>
				</form>
			</MessageSpan>
		</ConversationContainer>
  );
}

export default WhiteEmailArea;