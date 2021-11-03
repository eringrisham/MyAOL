import React from 'react';
import { TextInputContainer, FormContainer } from './styles.css'

const TextInput = () => (
  <TextInputContainer>
    <FormContainer>
      <label aria-labelledby='fake input form'>
      <input type='text' aria-label='fake input form'/>
      </label>
    </FormContainer>
  </TextInputContainer>
);

export default TextInput;