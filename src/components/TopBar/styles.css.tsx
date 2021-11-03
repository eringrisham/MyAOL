import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 10%;
	background-color: rgb(2,71,254);
	color: white;
	font-weight: bold;
	font-size: 1.5em;
`
export const XButton = styled.button`
  position: absolute;
	top: 1%;
  right: 1%;
	color: white;
	font-weight: bold;
	text-align: center;
	background-color: red;
	height: 8%;
	width: 7%;
	border: 1px white solid;
	border-radius: 5px;
	cursor: default;
	padding-left: 1%;
	font-size: 25px;
`
export const MinButton = styled(XButton)`
  right: 17%;
	color: white;
	text-align: left;
	font-size: 25px;
	background-color: rgb(2,71,254);
	cursor: default;
`
export const MaxButton = styled(MinButton)`
  right: 9%;
	font-size: 35px;
	line-height: 25px;
`