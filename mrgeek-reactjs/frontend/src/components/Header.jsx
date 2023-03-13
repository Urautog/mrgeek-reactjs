import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <>
      <div className="bg-dark-green p-3 text-end"></div>
      <Navbar bg="" variant="" className="bg-pink nav-header">
        <Container>
          <Col md={2} >
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
                <Nav.Link href="/login">Login</Nav.Link>
              </Col>
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
                    <Dropdown.Item href="/admin/users">Usuários</Dropdown.Item>
                    <Dropdown.Item href="">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
