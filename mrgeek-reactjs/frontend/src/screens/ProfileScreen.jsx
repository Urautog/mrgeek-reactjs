import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardAddress from '../components/CardAddress';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProfileScreen() {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  const { id } = useParams();

  function getUser() {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setUser(res.data.user);
        setAddresses(res.data.userAddresses);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  useEffect(() => {
    getUser();
    setLoading(false);
  }, []);

  console.log('Get User');
  console.log(user);
  console.log('Get AddressUser');
  console.log(addresses);

  return (
    <>
      {user && (
        <Container className="my-3">
          <h1 className="text-center">MEUS DADOS</h1>
          <Row className="meus-dados">
            <Col md={6} className="dados-pessoais">
              <Form action="#">
                <Form.Group
                  className="mb-3 input-wrapper"
                  controlId="firstName"
                >
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 input-wrapper" controlId="lastName">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.lastName}

                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 input-wrapper" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={user.email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 input-wrapper" controlId="tel">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.tel}
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
                {/* <Button type="submit" className="w-100 my-3">
                  Salvar Alterações
                </Button> */}
                {/* <input className="btn-verde-animado" type="button" value="Salvar" /> */}
                {/* </div> */}
              </Form>
            </Col>
            <Col md={6} className="enderecos ">
              {addresses.map((address) => (
                <CardAddress address={address}></CardAddress>
              ))}
              {/* <Button type="submit" className="w-50 my-3">
                Adicionar Endereço
              </Button> */}
            </Col>
          </Row>
          <img
            id="teen-titans"
            src="../public/img/game-of-thrones.svg"
            alt=""
          />
        </Container>
      )}
    </>
  );
}

export default ProfileScreen;
