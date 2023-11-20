import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const HeaderItens = styled(HashLink)`
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
`;

const HeaderUserName = styled.h2`
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
`;

function GlobalHeader() {
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const [activeItem, setActiveItem] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      history.push("/");
    } else {
      const firstName = loggedInUser.split(" ")[0];
      setFirstName(firstName);
      console.log(firstName); // This will log the first name to the console
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    history.push('/');
  };

  return (
    <Navbar expand="sm" style={{ backgroundColor: "#fff", padding: "1% 4%" }}>
      <Container fluid>
        <a href="#/">
          <img src={Logo} alt="Logo com ondinhas" style={{ height: "50px" }} />
        </a>
        <HeaderUserName className="TextPrimary" style={{ marginLeft: "10px" }}>
          {firstName}
          <FaSignOutAlt style={{ marginLeft: "10px", cursor:"pointer" }} onClick={handleLogout} />
        </HeaderUserName>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleToggleOffcanvas}
        />
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Logo}
                  alt="Logo com HapBox"
                  style={{ height: "40px", marginRight: "10px" }}
                />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCloseOffcanvas();
                }}
              >
                <HeaderItens className="TextPrimary" smooth to="#home">
                  Home
                </HeaderItens>
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCloseOffcanvas();
                }}
              >
                <HeaderItens className="TextPrimary" smooth to="#vantagens">
                  Vantagens
                </HeaderItens>
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCloseOffcanvas();
                }}
              >
                <HeaderItens className="TextPrimary" smooth to="#desafio">
                  Desafio
                </HeaderItens>
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <HeaderItens className="TextPrimary" smooth to="#quemSomos">
                  Quem Somos
                </HeaderItens>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default GlobalHeader;
