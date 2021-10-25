import React from 'react';
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { BottomIconContainer, Span } from './styles.css';
import { Verts } from '../Shared/styles.css';
import { RiMailSendLine } from "react-icons/ri";
import { GiPalette, GiRollingDices } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { FixMe } from '../../types';

const BottomIcons = ({handleOpen}:FixMe) => {
	const handleGitHubClick = () => (
    window.location.assign('https://github.com/eringrisham')
	);

	const handleLinkedInClick = () => (
    window.location.assign('https://www.linkedin.com/in/erin-grisham')
	);

	const handlePaletteClick = () => {
		window.location.assign('https://kidpix.app/');
	}

	const handleDiceClick = () => {
		window.location.assign('https://archive.org/details/msdos_Oregon_Trail_The_1990');
	}

  return (
		<>
			<BottomIconContainer>
				<Span>
					<FaGithub size={40} onClick={handleGitHubClick} style={{cursor: 'pointer'}}/>
				</Span>
				<Span>
					<FaLinkedin size={40} onClick={handleLinkedInClick} style={{cursor: 'pointer'}}/>
				</Span>
				<Verts/>
				<Span style={{marginLeft: '7%'}} >
					<GiPalette style={{color: 'brown', cursor: 'pointer'}} onClick={handlePaletteClick} size={40}/>
				</Span>
				<Span style={{marginLeft: '5%'}}>
					<GiRollingDices size={40} style={{cursor: 'pointer', color: 'black'}} onClick={handleDiceClick}/>
				</Span>
				<Span style={{marginLeft: '5%'}}>
				  <BsPersonCircle onClick={handleOpen} size={40} style={{cursor: 'pointer', color: 'magenta'}}/>
				</Span>
				<Verts style={{left: '75%'}} />
				<Span style={{position: 'absolute', marginLeft: '80%'}}>
					<RiMailSendLine size={45} style={{cursor: 'pointer'}}/>
				</Span>
			</BottomIconContainer>
		</>
  );
}

export default BottomIcons;