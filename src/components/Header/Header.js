import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { useState } from 'react';

import {
    Titulo01,
    Subtitulo01,
    Subtitulo02,
    BotaoPrimario01,
    BotaoPrimario02,
    BotaoSecundario01,
    Paragrafo01,
} from "../Comum/Comum";

const HeaderItens = styled.h2`
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
`

const HeaderItensDestaque = styled.h2`
  color: #fff;
  font-family: Epilogue;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  background-color: #EF5821;
  text-transform: uppercase;
  text-align: center;
`


function GlobalHeader() {
    const location = useLocation();
    const [showOffcanvas, setShowOffcanvas] = useState(false);
  
    const handleCloseOffcanvas = () => {
      setShowOffcanvas(false);
    };
  
    const handleToggleOffcanvas = () => {
      setShowOffcanvas(!showOffcanvas);
    };

    const [activeItem, setActiveItem] = useState(null);
  
    return (
      <Navbar expand="sm" style={{ backgroundColor: '#fff', padding:"1% 4%" }}>
        <Container fluid>
          <a  href="#/">
            <img src={Logo} alt='Logo com ondinhas' style={{ height: "50px"}} />
          </a>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas} />
          <Navbar.Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={Logo} alt='Logo com HapBox' style={{ height: "40px", marginRight: "10px" }} />
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#/" onClick={handleCloseOffcanvas}>
                  <HeaderItens>
                    Home
                  </HeaderItens>
                </Nav.Link>
                <Nav.Link href="#Consulta" onClick={handleCloseOffcanvas}>
                  <HeaderItens>
                    Sobre
                  </HeaderItens>
                </Nav.Link>
                <Nav.Link href="#Apoio" onClick={handleCloseOffcanvas}>
                  <HeaderItens>
                    Quem Somos
                  </HeaderItens>
                </Nav.Link>
                <Nav.Link href="#Apoio" onClick={handleCloseOffcanvas}>
                  <HeaderItensDestaque>
                    Fale Conosco
                  </HeaderItensDestaque>
                </Nav.Link>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
  
  export default GlobalHeader;