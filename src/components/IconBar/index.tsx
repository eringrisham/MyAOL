import React from 'react';
import { IconBarContainer, Span, BlackSpan } from './styles.css'
import { Verts } from '../Shared/styles.css';
import { FaFont, FaCat } from "react-icons/fa";
import { MdFontDownload } from "react-icons/md";
import { BiFontSize, BiFontFamily, BiBold } from "react-icons/bi";
import { GrItalic, GrUnderline } from "react-icons/gr";
import { BsEmojiSunglasses, BsLightningChargeFill } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";



const IconBar = () => {

  return (
    <IconBarContainer>
      <Span>
        <FaFont size={20}/>
			</Span>
			<Span>
        <MdFontDownload size={20}/>
			</Span>
      <Verts style={{left: '20%'}}/>
      <BlackSpan style={{marginLeft: '5%'}}>
        <BiFontSize size={22} />
			</BlackSpan>
      <BlackSpan>
        <BiFontFamily size={22} />
			</BlackSpan>
      <Verts style={{left: '40%'}} />
      <BlackSpan style={{marginLeft: '3%'}} >
        <BiBold size={22} />
			</BlackSpan>
      <BlackSpan>
        <GrItalic size={22} />
			</BlackSpan>
      <BlackSpan>
        <GrUnderline size={22} />
			</BlackSpan>
      <Verts style={{left: '67%'}}/>
      <Span style={{marginLeft: '3%'}} >
        <BsEmojiSunglasses style={{color: 'black', backgroundColor: 'yellow'}} size={20}/>
			</Span>
      <BlackSpan>
        <FaCat size={20}/>
			</BlackSpan>
      <BlackSpan>
        <BsLightningChargeFill size={20}/>
			</BlackSpan>
      <BlackSpan>
        <FiCoffee size={20}/>
			</BlackSpan>
    </IconBarContainer>
  );
}

export default IconBar;