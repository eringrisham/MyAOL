import styled from 'styled-components';

export const MeModalContainer = styled.div`
  z-index: 1000;
  display: flex;
	flex-direction: column;
	border: 4px blue solid;
	position: absolute;
	left: 5%;
	top: 20%;
	height: 50%;
	border-radius: 5px;
	box-shadow: 4px 4px 4px black;
	min-width: 300px;
	max-width: 300px;
	min-height: 400px;
	max-height: 400px;
`