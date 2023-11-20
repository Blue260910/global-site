import styled from "styled-components";
import Senhora from "../../assets/Senhora.png"; 
import GifTelas from "../../assets/GifTelas.gif"; 

const QuemSomosTextContainer01 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
  padding: 10% 3% 5% 3%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 10% 3% 5% 3%;
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

const GifContainer = styled.div`
display: flex;
position: relative;
margin-right: -18%;

@media (max-width: 900px) {
  margin-right: -1%;
  margin-top: 10%;
}

`;

function QuemSomos() {
  return (
    <section style={{ backgroundColor: "#131212", padding: "5% 5%" }} id="quemSomos">
      <QuemSomosTextContainer01>
      <div>
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
        <div style={{display:"flex"}}>
          <img src={Senhora} alt="Senhora" style={{margin: "50px auto",width:"100%"}}/>
        </div>

      </div>
      <div>
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
        <GifContainer>
          <img src={GifTelas} alt="Senhora" style={{width:"100%"}}/>
        </GifContainer>
      </div>
      </QuemSomosTextContainer01>
    </section>
  );
}

export default QuemSomos;
