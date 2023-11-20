import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VantagensContainer = styled.div`
  display: flex;
  width: 500px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const VantagensNumber = styled.h1`
  font-family: Epilogue;
  font-size: 60px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-right: 20px;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const VantagensTitulo = styled.h1`
  font-family: Epilogue;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const VantagensTexto = styled.p`
  font-family: Epilogue;
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 123%; /* 22.14px */

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

function vantagens() {
  return (
    <section style={{ backgroundColor: "#131212", padding: "5% 5%" }} id="vantagens">
        <Row style={{ alignItems: "start", justifyContent: "center" }}>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber className="TextWhite">01.</VantagensNumber>
              <div>
                <VantagensTitulo className="TextWhite">Feito para Você</VantagensTitulo>
                <VantagensTexto className="TextWhite">
                  Personalize seu cronograma para um cuidado personalizado com
                  HapBox.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber className="TextWhite">02.</VantagensNumber>
              <div>
                <VantagensTitulo className="TextWhite">Simples, mas Poderoso</VantagensTitulo>
                <VantagensTexto className="TextWhite">
                  HapBox torna a tomada de medicamentos simples e sem estresse.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber className="TextWhite">03.</VantagensNumber>
              <div>
                <VantagensTitulo className="TextWhite">Segurança e Confiança</VantagensTitulo>
                <VantagensTexto className="TextWhite">
                  Descanse tranquilo com a administração confiável de
                  medicamentos da HapBox.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber className="TextWhite">04.</VantagensNumber>
              <div>
                <VantagensTitulo className="TextWhite">Segurança Adaptável</VantagensTitulo>
                <VantagensTexto className="TextWhite">
                  HapBox, uma solução adaptável para idosos, oferece segurança e
                  tranquilidade.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber className="TextWhite">05.</VantagensNumber>
              <div>
                <VantagensTitulo className="TextWhite">Comunicação Eficiente</VantagensTitulo>
                <VantagensTexto className="TextWhite">
                  Mantenha seu médico na linha para ajustes precisos e
                  eficientes.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber className="TextWhite">06.</VantagensNumber>
              <div>
                <VantagensTitulo className="TextWhite">Lembre-se sem Esforço</VantagensTitulo>
                <VantagensTexto className="TextWhite">
                  Receba lembretes personalizados para manter o controle de seus
                  medicamentos.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
        </Row>
    </section>
  );
}

export default vantagens;
