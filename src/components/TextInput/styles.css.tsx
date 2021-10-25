import styled from 'styled-components';

export const TextInputContainer = styled.div`
  background-color: white;
	z-index: 1000;
	position: absolute;
	top: 75%;
	height: 12%;
	width: 98%;
	margin-right: 1%;
	margin-left: 1%;
	box-shadow: 3px 2px gray inset;
	cursor: text;
`
export const FormContainer = styled.form`
input[type="text"] {
	border: none;
	outline: none;
	top: 20%;
  margin-left: 1%;
	width: 98%;
	height: 100%;
  font-family: inherit;
	margin-top: 5px;
	font-size: 18px;
	line-height: 3.5;
}

`