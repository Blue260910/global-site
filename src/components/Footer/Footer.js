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
  color: #2D2C2C;
  font-family: Epilogue;
  font-size: 16px;
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
          <FooterItens smooth to="#home">Home</FooterItens>
          <FooterItens smooth to="#vantagens">Vantagens</FooterItens>
          <FooterItens smooth to="#desafio">Desafio</FooterItens>
          <FooterItens smooth to="#quemSomos">Quem Somos</FooterItens>
        </ul>
        <Divider />
          <FooterItens>2023 HapBox. All right reserved.</FooterItens>
    </FooterContainer>
  );
}

export default Footer;
