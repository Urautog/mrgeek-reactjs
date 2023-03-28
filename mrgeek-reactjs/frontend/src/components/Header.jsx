import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useJwt } from 'react-jwt';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../contexts/AuthContext';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  const context = useContext(AuthContext);

  const { decodedToken } = useJwt(sessionStorage.getItem('token'));

  return (
    <>
      <div className="bg-dark-green p-3 text-end"></div>
      <Navbar bg="" variant="" className="bg-pink nav-header">
        <Container className="">
          <Col md={2}>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  height={80}
                  width={80}
                  src="../public/img/MrGeek (2).png"
                  alt="Logo MRGeek"
                  className="header-logo"
                />
              </Navbar.Brand>
            </LinkContainer>
          </Col>
          <Col md={10} className="">
            <Nav className="flex-row">
              <Col className="d-flex flex-row">
                <LinkContainer to="/products">
                  <Nav.Link className="pt-3">Produtos</Nav.Link>
                </LinkContainer>

                {!decodedToken && (
                  <LinkContainer to="/login">
                    <Nav.Link className="pt-3">Login</Nav.Link>
                  </LinkContainer>
                )}

                {decodedToken && (
                  <Nav.Link>
                    <Dropdown className="">
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Bem vindo, {decodedToken.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="">
                        <LinkContainer to={`/profile/${decodedToken.id}`}>
                          <Dropdown.Item href="">Meus dados</Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/profile/orders">
                          <Dropdown.Item>Meus pedidos</Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                          <Dropdown.Item>Carrinho</Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="">
                          <Dropdown.Item>Something else</Dropdown.Item>
                        </LinkContainer>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>
                )}

                {/* <LinkContainer to="/cart">
                  <Nav.Link className="pt-3">Carrinho</Nav.Link>
                </LinkContainer> */}
                {decodedToken && (
                  <Button
                    className="logout-btn"
                    onClick={() => context.logout()}
                  >
                    Logout
                  </Button>
                )}
              </Col>
              {decodedToken && decodedToken.isAdmin && (
                <Col className="d-flex flex-row align-items-center justify-content-end">
                  <Dropdown className="">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Painel Admin
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="">
                      <Dropdown.Item href="">Home</Dropdown.Item>
                      <LinkContainer to="/admin/products">
                        <Dropdown.Item>Produtos</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <Dropdown.Item>Usuários</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="">
                        <Dropdown.Item>Something else</Dropdown.Item>
                      </LinkContainer>
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
