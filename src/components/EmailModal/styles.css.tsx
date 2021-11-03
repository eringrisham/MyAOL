import styled from 'styled-components';

export const EmailModalContainer = styled.div`
  z-index: 500;
  display: flex;
	flex-direction: column;
	border-style: solid;
	border-width: 4px;
	border-image: linear-gradient(to bottom right, #0276FD, blue) 1;
	position: absolute;
	top: 20%;
	height: 50%;
	border-radius: 5px;
	box-shadow: 4px 4px 4px black;
	min-width: 300px;
	max-width: 300px;
	min-height: 400px;
	max-height: 400px;
`
