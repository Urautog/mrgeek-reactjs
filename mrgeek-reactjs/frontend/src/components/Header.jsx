import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
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
          <Col md={10}>
            <Nav className="me-auto">
              <Nav.Link href="/products">Produtos</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/admin/products">Admin</Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
