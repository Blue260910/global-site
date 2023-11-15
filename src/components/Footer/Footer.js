import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #034c5c;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2vw 0 0 0;
  height: 100%;
`;

const FooterColunas = styled.footer`
  width: 100%;
  background-color: #034c5c;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2vw 2vw;
  height: 100%;
`;

const FooterTitulo = styled.footer`
  width: 100%;
  padding: 2vw 2vw;
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        nada
      </div>
    </FooterContainer>
  );
}

export default Footer;
