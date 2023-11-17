import styled from "styled-components";

const QuemSomosTextContainer01 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
  padding: 10% 3% 15% 3%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 10% 3% 15% 3%;
    gap: 30px;
  }
`;

const QuemSomosTopc = styled.h1`
  color: #fff;
  font-family: Epilogue;
  font-size: clamp(1rem, 0.901rem + 0.526vw, 1.375rem);
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  margin-bottom: 20px;
`;

const QuemSomosSubTitulo = styled.h2`
  color: #fff;
  font-family: Epilogue;
  font-size: clamp(2.5rem, 2.336rem + 0.877vw, 3.125rem);
  font-style: normal;
  font-weight: 200;
  line-height: 120%; /* 48px */
`;

const SubDestaque = styled.strong`
  color: #ef5821;
  font-weight: 800;
`;

const QuemSomosText = styled.p`
  color: #fff;
  font-family: Epilogue;
  font-size: clamp(1.125rem, 0.986rem + 0.741vw, 1.875rem);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  text-align: justify;
`;

function QuemSomos() {
  return (
    <div style={{ backgroundColor: "#131212", padding: "5% 5%" }}>
      <QuemSomosTextContainer01>
        <div>
          <QuemSomosTopc>Quem Somos</QuemSomosTopc>
          <QuemSomosSubTitulo>
            <SubDestaque style={{ color: "#fff" }}>
              {" "}
              Conectando, <br />
              Cuidado e Inovando{" "}
            </SubDestaque>
            Desenvolvedores por <br /> Trás do Projeto HapBox
          </QuemSomosSubTitulo>
        </div>
        <QuemSomosText>
          Nós somos Felipe Cortez dos Santos e Victor Hugo Aranda Forte, alunos
          da (FIAP) e os desenvolvedores do projeto HapBox em parceria com a
          HapVida.<br /> <br />
          Em nossos papéis, desempenhamos funções essenciais desde a
          concepção até a implementação deste dispositivo inovador. <br /> <br />
          Combinamos nossas habilidades em engenharia de software, design e gestão de
          projeto para garantir o sucesso e a eficácia do HapBox. <br /> <br /> 
          Estamos entusiasmados em colaborar e aplicar nossos conhecimentos para criar
          uma solução que faça diferença na administração de medicamentos e na
          saúde das pessoas.
        </QuemSomosText>
      </QuemSomosTextContainer01>
    </div>
  );
}

export default QuemSomos;
