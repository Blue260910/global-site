import Form from "react-bootstrap/Form";
import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { Subtitulo01, Paragrafo01 } from "../Comum/Comum";

import LogoBranco from "../../assets/LogoBranca.png";



const BotaoLogin = styled.button`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: DM Sans;
  font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  border-radius: 9px;
  display: flex;
  padding: 2% 3%;
  align-items: center;
  gap: 8px;
  background-color: #EF5821;
  border: none;
  transition: all 0.2s ease-in-out;

  width: 100%;
  justify-content: center;

  &:hover {
    color: #fff;
    background-color: #403e61;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 5% 3%;
  }
`;

const LoginContainer = styled.div`
  background: #2D2C2C;
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
    height: 100vh;

  }
`;

function FormGroupExample() {
  const history = useHistory();
  async function getApi() {
    fetch("https://hapbox-f9157-default-rtdb.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dataArray = Object.values(data);
        for (let i = 0; i < dataArray.length; i++) {
          console.log(dataArray[i].Email);
          if (dataArray[i].Email === email) {
            if (dataArray[i].Senha === password) {
              console.log("Senha correta");
              localStorage.setItem("loggedInUser", dataArray[i].Name); // Assuming the name is stored in the 'Name' property
              history.push("/HomePage");
              return; // colocar aqui o que caraios vao quere faze quando a senha estiver correta
            }
          }
        }
      });
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      console.log("Formulário válido");
      getApi().then((response) => {
        if (response === true) {
          console.log("Login realizado com sucesso");
          document.getElementById("Subtitulo01").innerText =
            "Login realizado com sucesso";
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        } else {
          document.getElementById("Subtitulo01").innerText =
            "Email ou senha incorretos";
          console.log("Email ou senha incorretos");
        }
      });
    } else {
      console.log("Formulário inválido");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      history.push("/HomePage");
    } 
  }, [history]);

  return (
    <LoginContainer>
      <img src={LogoBranco} alt="Logo" style={{ width: "30%", margin:"auto auto" }} />
      
      <Form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <Subtitulo01
          id="Subtitulo01"
          style={{textAlign: "center" }}
          className="TextWhite"
        >
          Login
        </Subtitulo01>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            size="lg"
            type="email"
            placeholder="Enter email"
            style={{ background: "#F0EFFF"}}
            className="TextPrimary"
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            required
          />
          <Form.Text className="text-muted">
            {formSubmitted && !email ? "Digite um email válido." : ""}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            style={{ background: "#F0EFFF"}}
            className="TextPrimary"
            value={password}
            onChange={(element) => setPassword(element.target.value)}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 TextWhite"
          controlId="formBasicCheckbox"
          style={{ zIndex: "2"}}

        >
          <Form.Check type="checkbox" label="Termos e condições" required />
        </Form.Group>
        <BotaoLogin className="TextWhite">
          Login <i className="fas fa-arrow-right" type="submit"></i>
        </BotaoLogin>
        <Paragrafo01
          style={{textAlign: "center", fontSize: "20px" }}
          className="TextWhite"
        >
          Ainda não possui uma conta? <br />
          Você pode <a href="#Cadastro">criar uma conta aqui!</a>
        </Paragrafo01>
      </Form>
    </LoginContainer>
  );
}

export default FormGroupExample;
