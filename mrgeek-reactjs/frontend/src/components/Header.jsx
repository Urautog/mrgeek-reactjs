import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useJwt } from 'react-jwt';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const context = useContext(AuthContext);

  const { decodedToken, isExpired } = useJwt(context.token);

  console.log('Carregou agora');
  console.log(decodedToken);

  return (
    <>
      <div className="bg-dark-green p-3 text-end"></div>
      <Navbar bg="" variant="" className="bg-pink nav-header">
        <Container>
          <Col md={2}>
            <Navbar.Brand href="/">
              <img
                height={80}
                width={80}
                src="../public/img/MrGeek (2).png"
                alt="Logo MRGeek"
                className="header-logo"
              />
            </Navbar.Brand>
          </Col>
          <Col md={10} className="">
            <Nav className="flex-row">
              <Col className="d-flex flex-row">
                <Nav.Link href="/products">Produtos</Nav.Link>
                <Nav.Link
                  href={decodedToken && context.user ? '/profile' : '/login'}
                >
                  {' '}
                  {decodedToken && context.user ? context.user.name : 'Login'}
                </Nav.Link>
                <Button onClick={() => context.logout()}>Logout</Button>
              </Col>
              {decodedToken && context.user && context.user.isAdmin && (
                <Col className="d-flex flex-row justify-content-end">
                  <Dropdown className="">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Painel Admin
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="">
                      <Dropdown.Item href="">Home</Dropdown.Item>
                      <Dropdown.Item href="/admin/products">
                        Produtos
                      </Dropdown.Item>
                      <Dropdown.Item href="/admin/users">
                        Usuários
                      </Dropdown.Item>
                      <Dropdown.Item href="">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              )}
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
