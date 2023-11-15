import styled from "styled-components";
import DesafiosGlobaisImg from "../../assets/DesafiosGlobais.png";
import InovacaoIMG from "../../assets/InovaçãoTecnologica.png";
import HapModeloPreto from "./HapBoxModelPreto.js";
import HapModeloBranco from "./HapBoxModelBranco.js";


const DesafiosContainer = styled.div`
  padding: 10% 10%;
  max-width: 1920px;
  align-items: start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 5% 10%;
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
`;

const DestaqueTexto = styled.strong`
    color: #EF5821;
`

const DesafiosTextContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
    padding: 10% 3% 15% 3%;
    margin-top: 10%;
    margin-bottom: 10%;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 10% 3% 15% 3%;
        gap: 30px;
    }


`;



const DesafiosTopc = styled.h1`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin-bottom: 20px;
`;

const DesafiosSubTitulo = styled.h2`
    color: #2D2C2C;
    font-family: Epilogue;
    font-size: 40px;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    text-align: justify;
`;

function Desafios() {
  return (
    <DesafiosContainer>
        <DesafiosTitulo>Nosso<br /><DestaqueTexto>Desafio</DestaqueTexto></DesafiosTitulo>
        <DesafiosTextContainer style={{backgroundImage: `url(${DesafiosGlobaisImg})`}}>
            <div>
                <DesafiosTopc>Tratamentos Medicos</DesafiosTopc>
                <DesafiosSubTitulo>Desafios Globais <br /> <SubDestaque> Adesão ao <br />Tratamento Médico </SubDestaque></DesafiosSubTitulo>
            </div>
                <DesafiosText>A falta de adesão ao tratamento médico emerge como um desafio global, com até metade da população mundial não seguindo as prescrições médicas. Segundo o UOL VivaBem, na Europa, estima-se que a não adesão resulte em 200 mil mortes precoces anualmente por falta de adesão a tratamentos médicos.</DesafiosText>
        </DesafiosTextContainer>
        <DesafiosTextContainer style={{backgroundImage: `url(${InovacaoIMG})`}}>
            <div>
                <DesafiosTopc style={{color:"#fff"}}>HapBox: a solução</DesafiosTopc>
                <DesafiosSubTitulo style={{color:"#fff"}}>Inovação Tecnológica<br /> <SubDestaque style={{color:"#fff"}}> Promovendo <br />Adesão ao Tratamento Médico</SubDestaque></DesafiosSubTitulo>
            </div>
                <DesafiosText style={{color:"#fff"}}>A proposta do <DestaqueTexto>HapBox</DestaqueTexto>, um projeto desenvolvido pela equipe da Faculdade de Informática e Administração Paulista (FIAP), visa abordar os desafios globais de adesão ao tratamento médico, especialmente entre os idosos.</DesafiosText>

                <DesafiosText style={{color:"#fff", gridColumn: "span 2"}}>O <DestaqueTexto>HapBox</DestaqueTexto> é um dispositivo inovador que automatiza a administração de medicamentos, conectando-se diretamente ao médico e oferecendo personalização para o usuário. Com dispensa automática e integração IoT, promove uma gestão eficaz do tratamento, melhorando a adesão por meio de uma abordagem prática e organizada, fortalecendo a supervisão médica.</DesafiosText>
                <HapModeloPreto />
                <HapModeloBranco />
        </DesafiosTextContainer>
    </DesafiosContainer>
  );
}

export default Desafios;