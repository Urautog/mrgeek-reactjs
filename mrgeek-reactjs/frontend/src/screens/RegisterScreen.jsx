import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const checkCEP = async (e) => {
    const zipcode = e.target.value.replace(/\D/g, '');
    if (!e.target.value) {
      return;
    } else {
      try {
        const apiResult = await axios.get(
          `https://brasilapi.com.br/api/cep/v2/${zipcode}`
        );
        setCity(apiResult.data.city);
        setState(apiResult.data.state);
        setDistrict(apiResult.data.neighborhood);
        setStreet(apiResult.data.street);
        setState(apiResult.data.state);
      } catch (error) {
        console.log(error);
      }
    }

    const apiResult = await axios.get(
      `https://brasilapi.com.br/api/cep/v2/${zipcode}`
    );
    if (apiResult) {
      setCity(apiResult.data.city);
      setState(apiResult.data.state);
      setDistrict(apiResult.data.neighborhood);
      setStreet(apiResult.data.street);
      setState(apiResult.data.state);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', {
        firstName,
        lastName,
        email,
        tel,
        password,
        zipcode,
        state,
        city,
        district,
        street,
        number,
        complement,
      });
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="my-3">
      <h1 className="text-center">Cadastro</h1>
      <Row>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="firstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="lastName">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3 input-wrapper" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 input-wrapper" controlId="tel">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTel(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="zipcode">
                <Form.Label>Cep</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setZipcode(e.target.value)}
                  onBlur={checkCEP}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="state">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  value={state ? state : ' '}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="city">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city ? city : ' '}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="district">
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDistrict(e.target.value)}
                  value={district ? district : ' '}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3 input-wrapper" controlId="street">
            <Form.Label>Rua</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setStreet(e.target.value)}
              value={street ? street : ' '}
            />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="number">
                <Form.Label>Número</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3 input-wrapper" controlId="complement">
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setComplement(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3 input-wrapper" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="w-100 my-3">
            Cadastrar
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default RegisterScreen;
