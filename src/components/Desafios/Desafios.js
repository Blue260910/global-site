import styled from "styled-components";
import DesafiosGlobaisImg from "../../assets/DesafiosGlobais.png";
import InovacaoIMG from "../../assets/InovaçãoTecnologica.png";
import HapModeloPreto from "./HapBoxModelPreto.js";
import HapModeloBranco from "./HapBoxModelBranco.js";


const DesafiosContainer = styled.div`
  padding: 10% 10%;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 5% 0%;
    gap: 30px;
  }
`;


const DesafiosTitulo = styled.h1`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: clamp(3.125rem, 1.809rem + 7.018vw, 8.125rem);
    font-style: normal;
    font-weight: 800;
    text-transform: uppercase;
    @media (max-width: 900px) {
        margin-left: 5%;
      }
`;

const DestaqueTexto = styled.strong`
    color: #EF5821;
`

const DesafiosTextContainer01 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
    padding: 10% 3% 15% 3%;
    margin-top: 10%;
    margin-bottom: 10%;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 10% 3% 15% 3%;
        gap: 30px;
    }
`;
const DesafiosTextContainer02 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
    padding: 10% 3% 3% 3%;
    margin-top: 10%;
    margin-bottom: 10%;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 10% 3% 15% 3%;
        gap: 30px;
    }
`;



const DesafiosTopc = styled.h1`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: clamp(1rem, 0.901rem + 0.526vw, 1.375rem);
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin-bottom: 20px;
`;

const DesafiosSubTitulo = styled.h2`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: clamp(2.5rem, 2.336rem + 0.877vw, 3.125rem);
    font-style: normal;
    font-weight: 200;
    line-height: 120%; /* 48px */
`;

const SubDestaque = styled.strong`
    color: #2D2C2C;
    font-weight: 800;
`;

const DesafiosText = styled.p`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: clamp(1.125rem, 0.986rem + 0.741vw, 1.875rem);
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    text-align: justify;

`;

const DesafiosText02 = styled.p`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: clamp(1.125rem, 0.986rem + 0.741vw, 1.875rem);
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    text-align: justify;
    grid-column: span 2;

    @media (max-width: 900px) {
        grid-column: span 1;
    }

`;

function Desafios() {
  return (
    <DesafiosContainer>
        <DesafiosTitulo>Nosso<br /><DestaqueTexto>Desafio</DestaqueTexto></DesafiosTitulo>
        <DesafiosTextContainer01 style={{backgroundImage: `url(${DesafiosGlobaisImg})`}}>
            <div>
                <DesafiosTopc>Tratamentos Medicos</DesafiosTopc>
                <DesafiosSubTitulo>Desafios Globais <br /> <SubDestaque> Adesão ao <br />Tratamento Médico </SubDestaque></DesafiosSubTitulo>
            </div>
                <DesafiosText>A falta de adesão ao tratamento médico emerge como um desafio global, com até metade da população mundial não seguindo as prescrições médicas. Segundo o UOL VivaBem, na Europa, estima-se que a não adesão resulte em 200 mil mortes precoces anualmente por falta de adesão a tratamentos médicos.</DesafiosText>
        </DesafiosTextContainer01>
        <DesafiosTextContainer02 style={{backgroundImage: `url(${InovacaoIMG})`, padding: "10% 3% 3% 3%;"}}>
            <div>
                <DesafiosTopc style={{color:"#fff"}}>HapBox: a solução</DesafiosTopc>
                <DesafiosSubTitulo style={{color:"#fff"}}>Inovação Tecnológica<br /> <SubDestaque style={{color:"#fff"}}> Promovendo <br />Adesão ao Tratamento Médico</SubDestaque></DesafiosSubTitulo>
            </div>
                <DesafiosText style={{color:"#fff"}}>A proposta do <DestaqueTexto>HapBox</DestaqueTexto>, um projeto desenvolvido pela equipe da Faculdade de Informática e Administração Paulista (FIAP), visa abordar os desafios globais de adesão ao tratamento médico, especialmente entre os idosos.</DesafiosText>

                <DesafiosText02 style={{color:"#fff"}}>O <DestaqueTexto>HapBox</DestaqueTexto> é um dispositivo inovador que automatiza a administração de medicamentos, conectando-se diretamente ao médico e oferecendo personalização para o usuário. Com dispensa automática e integração IoT, promove uma gestão eficaz do tratamento, melhorando a adesão por meio de uma abordagem prática e organizada, fortalecendo a supervisão médica.</DesafiosText02>
                <HapModeloPreto />
                <HapModeloBranco />
        </DesafiosTextContainer02>
    </DesafiosContainer>
  );
}

export default Desafios;