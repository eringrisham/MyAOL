import styled from 'styled-components';

export const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-style: solid;
	border-width: 4px;
	border-image: linear-gradient(to bottom right, #0276FD, blue) 1;
	border-radius: 5px;
	width: 40%;
	position: absolute;
	top: 20%;
	height: 50%;
	box-shadow: 4px 4px 4px black;
	min-width: 550px;
	max-width: 550px;
	min-height: 500px;
	max-height: 500px;
	z-index: 0;
`