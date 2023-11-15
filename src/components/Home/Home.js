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

  return (
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
  );
}

export default FormGroupExample;