import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardAddress from '../components/CardAddress';

function ProfileScreen() {
  return (
    <>
      <Container className="my-3">
        <h1 className="text-center">MEUS DADOS</h1>
        <Row className="meus-dados">
          <Col md={6} className="dados-pessoais">
            <Form action="#">
              <Form.Group className="mb-3 input-wrapper" controlId="firstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 input-wrapper" controlId="lastName">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  // onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 input-wrapper" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 input-wrapper" controlId="tel">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="text"
                  // onChange={(e) => setTel(e.target.value)}
                />
              </Form.Group>
              {/* <input type="text" name="cpf" id="" placeholder=" CPF" />
              <input type="text" name="rg" id="" placeholder=" RG" />
              <input
                type="date"
                name="data-nascimento"
                id=""
                placeholder=" Data de nascimento"
              />
              <select name="genero" id="">
                <option value="" selected disabled>
                  Genêro
                </option>
                <option value="m">Masculino</option>
                <option value="f">Feminino</option>
                <option value="nb">Não binário</option>
              </select> */}
              {/* <div className="botoes"> */}
              <Button type="submit" className="w-100 my-3">
                Salvar Alterações
              </Button>
              {/* <input className="btn-verde-animado" type="button" value="Salvar" /> */}
              {/* </div> */}
            </Form>
          </Col>
          <Col md={6} className="enderecos ">
            <CardAddress />
            <Button type="submit" className="w-50 my-3">
              Adicionar Endereço
            </Button>
          </Col>
        </Row>
        <img id="teen-titans" src="../public/img/game-of-thrones.svg" alt="" />
      </Container>
    </>
  );
}

export default ProfileScreen;
