import React from 'react';
import { TextInputContainer, FormContainer } from './styles.css'

const TextInput = () => {
  return (
    <TextInputContainer>
			<FormContainer>
				<input type='text'/>
			</FormContainer>
    </TextInputContainer>
  );
}

export default TextInput;