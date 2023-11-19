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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
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
              <VantagensNumber>01.</VantagensNumber>
              <div>
                <VantagensTitulo>Feito para Você</VantagensTitulo>
                <VantagensTexto>
                  Personalize seu cronograma para um cuidado personalizado com
                  HapBox.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber>02.</VantagensNumber>
              <div>
                <VantagensTitulo>Simples, mas Poderoso</VantagensTitulo>
                <VantagensTexto>
                  HapBox torna a tomada de medicamentos simples e sem estresse.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber>03.</VantagensNumber>
              <div>
                <VantagensTitulo>Segurança e Confiança</VantagensTitulo>
                <VantagensTexto>
                  Descanse tranquilo com a administração confiável de
                  medicamentos da HapBox.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber>04.</VantagensNumber>
              <div>
                <VantagensTitulo>Segurança Adaptável</VantagensTitulo>
                <VantagensTexto>
                  HapBox, uma solução adaptável para idosos, oferece segurança e
                  tranquilidade.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber>05.</VantagensNumber>
              <div>
                <VantagensTitulo>Comunicação Eficiente</VantagensTitulo>
                <VantagensTexto>
                  Mantenha seu médico na linha para ajustes precisos e
                  eficientes.
                </VantagensTexto>
              </div>
            </VantagensContainer>
          </Col>
          <Col xs="auto" className="mb-5" style={{ backgroundColor: "fff" }}>
            <VantagensContainer>
              <VantagensNumber>06.</VantagensNumber>
              <div>
                <VantagensTitulo>Lembre-se sem Esforço</VantagensTitulo>
                <VantagensTexto>
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
