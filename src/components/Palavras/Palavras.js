import styled from "styled-components";
import GrupoPalavras from "../../assets/palavras-grandes.png";
import './Palavras.css';

const PalavrasDivisao = styled.div`
    width: 70%;
    height: 1px;
    background-color: #131212;

`

function Palavras() {
  return (
    <div style={{overflowX:"hidden"}}>
        <PalavrasDivisao />
        <img src={GrupoPalavras} alt="Imagem de capa" style={{width:"500%"}} className="infinite-scroll"/>
    </div>
  );
}

export default Palavras;