import { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

import { Subtitulo01, Paragrafo01 } from "../Comum/Comum.js";
import LogoBranco from "../../assets/LogoBranca.png";

const BotaoCadastro = styled.button`
  color: #fff;
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

const CadastroContainer = styled.div`
  background: #2D2C2C;
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
    height: 100vh;
  }
`;

function FormPezin() {
  const [validated, setValidated] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [cpfValid, setCpfValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [senhaValid, setSenhaValid] = useState(false);

  const cpfRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const senhaRef = useRef(null);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function handleNameChange(event) {
    const name = event.target.value;
    setNameValid(name.length > 0);
  }

  function handleEmailChange(event) {
    const email = event.target.value;
    const emailValid = validateEmail(email);
    setEmailValid(emailValid);
  }

  function handleCpfChange(event) {
    const cpf = event.target.value;
    setCpfValid(cpf.length === 11);
  }

  function handleSenhaChange(event) {
    const senha = event.target.value;
    setSenhaValid(senha.length > 0);
  }

  async function postApi() {
    const newData = {
      CPF: cpfRef.current.value,
      Email: emailRef.current.value,
      Name: nameRef.current.value,
      Senha: senhaRef.current.value,
    };

    // Make a POST request to add the new data
    const response = await fetch(
      "https://hapbox-f9157-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    if (response.ok) {
      console.log("Dados adicionados com sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      console.error("Erro ao adicionar dados:", response.statusText);
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      !emailValid ||
      !nameValid ||
      !senhaValid
    ) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      postApi();
      event.preventDefault();
    }

    setValidated(true);
  };

  return (

  <CadastroContainer>
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "650px",
        margin: "8% auto",
        zIndex: "1",
      }}
    >
      <Subtitulo01
        id="Subtitulo01"
        style={{ color: "#fff", textAlign: "center" }}
      >
        Criar conta
      </Subtitulo01>
      <Row>
        <Form.Group
          as={Col}
          md="5"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            type="Nome"
            placeholder="Nome"
            ref={nameRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            required
            isValid={nameValid}
            onChange={handleNameChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha um nome.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="7"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            type="text"
            placeholder="Email"
            ref={emailRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            required
            isInvalid={!emailValid}
            isValid={emailValid}
            onChange={handleEmailChange}
          />
          {!emailValid && (
            <Form.Control.Feedback type="invalid">
              Insira um Email valido!
            </Form.Control.Feedback>
          )}
          {emailValid && (
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group
          as={Col}
          md="5"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="Senha"
            ref={senhaRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            isValid={senhaValid}
            onChange={handleSenhaChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha uma Senha.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="5"
          controlId="validationCustom03"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="CPF"
            ref={cpfRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            isValid={cpfValid}
            onChange={handleCpfChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha um CPF.
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Concordo em submeter meus dados pessoais para a HapBox (Beta)."
              feedback="Você deve concordar antes de enviar."
              feedbackType="invalid"
              style={{ zIndex: "2", color: "#fff" }}
            />
          </Form.Group>
        </Row>
      </Row>
      <BotaoCadastro type="submit">
        Criar Conta <i className="fas fa-arrow-right"></i>
      </BotaoCadastro>
      <Paragrafo01
        style={{ color: "#fff", textAlign: "center", fontSize: "20px" }}
      >
        Já possui uma conta? <br />
        Você pode <a href="#">Fazer login aqui!</a>
      </Paragrafo01>
    </Form>
      <img src={LogoBranco} alt="Logo" style={{ width: "30%", margin:"auto auto" }} />
    </CadastroContainer>
  );
}

export default FormPezin;