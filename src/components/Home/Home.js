<<<<<<< HEAD
import styled from "styled-components";
import CoverImg01 from "../../assets/Imagem-01.png";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10% 10%;
  max-width: 1920px;
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

const HomeSubtitulo = styled.h2`
  color: #2D2C2C;
  font-family: Epilogue;
  font-size: clamp(1.125rem, 0.697rem + 2.281vw, 2.75rem);
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;
=======
import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  fetch('https://hapbox-f9157-default-rtdb.firebaseio.com/.json')
  .then(response => response.json())
  .then(data => 
    console.log(data)

    )
  .catch((error) => {
    console.error('Error:', error);
  });
>>>>>>> 7a69329740bad25e56f841bcf9d3e5e970085923

  return (
<<<<<<< HEAD
    <HomeContainer>
      <HomeTextContainer>
        <HomeTitulo>Hap<DestaqueTexto>Box</DestaqueTexto></HomeTitulo>
        <HomeSubtitulo>Cuidando da Sua <DestaqueTexto>Saúde</DestaqueTexto>,<br /> <DestaqueTexto>Medicamento</DestaqueTexto> por <br /><DestaqueTexto>Medicamento</DestaqueTexto></HomeSubtitulo>
      </HomeTextContainer>
      <img src={CoverImg01} alt="Imagem de capa" style={{width:"100%", maxWidth:"500px"}}/> 
    </HomeContainer>
=======
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
>>>>>>> 7a69329740bad25e56f841bcf9d3e5e970085923
  );
}

export default FormGroupExample;