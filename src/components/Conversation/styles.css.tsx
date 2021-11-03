import styled from 'styled-components';

export const ConversationContainer = styled.div`
  background-color: white;
	z-index: 1000;
	position: absolute;
	height: 45%;
	width: 98%;
	margin-right: 1%;
	margin-left: 1%;
	align-items: center;
	box-shadow: 3px 2px gray inset;
	cursor: default;
`
export const ScreenNameSpan = styled.span`
  color: darkred;
  margin-left: 1%;
  font-size: 18px;
  font-weight: bold;
`

export const MessageSpan = styled.span`
  margin-left: 1%;
  font-size: 18px;
`