import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

import { HashLink } from 'react-router-hash-link';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  padding: 5% 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const FooterItens = styled(HashLink)`
  font-family: Epilogue;
  font-size: clamp(0.625rem, 0.357rem + 0.714vw, 1rem);
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 20px;
`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #2D2C2C;
  margin: 20px 0;
`

function Footer() {
  return (
    <FooterContainer>
        <ul style={{display:"flex", alignItems:"center"}}>
          <img src={Logo} alt="Logo" />
          <FooterItens className="TextPrimary" smooth to="#home">Home</FooterItens>
          <FooterItens className="TextPrimary" smooth to="#vantagens">Vantagens</FooterItens>
          <FooterItens className="TextPrimary" smooth to="#desafio">Desafio</FooterItens>
          <FooterItens className="TextPrimary" smooth to="#quemSomos">Quem Somos</FooterItens>
        </ul>
        <Divider />
          <FooterItens className="TextPrimary">2023 HapBox. All right reserved.</FooterItens>
    </FooterContainer>
  );
}

export default Footer;
