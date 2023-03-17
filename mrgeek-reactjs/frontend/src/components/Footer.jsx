import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  return (
    <div className="bg-pink">
      <Container className="bg-pink text-white py-4">
        <Row>
          <Row>
            <Col md={3} className="text-center px-4">
              <LinkContainer
                to="/"
                className="col-3 text-reset text-uppercase d-flex align-itens-center"
              >
                <img
                  // height={80}
                  // width={80}
                  src="../public/img/MrGeek (2).png"
                  alt="Logo MRGeek"
                  className="footer-logo m-auto"
                />
              </LinkContainer>
            </Col>
            <Col md={3} className="px-4">
              <ul>
                <li className="font-weight-bold text-uppercase">
                  INFORMAÇÕES DA EMPRESA
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Sobre MrGeek
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Endereço
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Responsabilidade local
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="px-4">
              <ul>
                <li className="font-weight-bold text-uppercase">
                  AJUDA E SUPORTE
                </li>
                <li>
                  <a href="/" className="col-3text-reset">
                    Política de frete
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Devolução
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Como pedir
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Como rastrear
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Guia de tamanhos
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Contate-nos
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset">
                    Método de pagamento
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="px-4">
              <ul>
                <li className="font-weight-bold text-uppercase">
                  REDES SOCIAIS
                </li>
                <li>
                  <a href="/" className="text-reset">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="/" className="text-reset">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="/" className="text-reset">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="/" className="text-reset">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Cadastre-se para receber notificações
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Inscreva-se
                  </button>
                </form>
              </ul>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
