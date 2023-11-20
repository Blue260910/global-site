
import styled from "styled-components";
import CoverImg01 from "../../assets/Imagem-01.png";

const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10% 10%;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 5% 10%;
    gap: 30px;
  }
`;

const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeTitulo = styled.h1`
  font-family: Epilogue;
  font-size: clamp(3.125rem, 1.809rem + 7.018vw, 8.125rem);
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;

const HomeSubtitulo = styled.h2`
  font-family: Epilogue;
  font-size: clamp(1.125rem, 0.697rem + 2.281vw, 2.75rem);
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;

function Home() {

  return (
    <HomeContainer id="home">
      <HomeTextContainer>
        <HomeTitulo className="TextPrimary">Hap<strong>Box</strong></HomeTitulo>
        <HomeSubtitulo className="TextPrimary">Cuidando da Sua <strong>Saúde</strong>,<br /> <strong>Medicamento</strong> por <br /><strong>Medicamento</strong></HomeSubtitulo>
      </HomeTextContainer>
      <img src={CoverImg01} alt="Imagem de capa" style={{width:"100%", maxWidth:"500px", margin:"0 auto"}}/> 
    </HomeContainer>
  );
}

export default Home;