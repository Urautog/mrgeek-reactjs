import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  return (
    <div className="d-flex justify-content-around bg-pink">
      <Row >
        <Container className="bg-pink text-white py-4">
          <Row>
            <Col md={3} className='text-center px-4'>
              <LinkContainer
                to="/"
                class="col-3 text-reset text-uppercase d-flex align-itens-center"
              >
                <img
                  height={100}
                  width={100}
                  src="../public/img/MrGeek (2).png"
                  alt="Logo MRGeek"
                  class="footer-logo"
                />
              </LinkContainer>
            </Col>
            <Col md={3} className='px-4'>
              <ul>
                <li class="font-weight-bold text-uppercase">
                  INFORMAÇÕES DA EMPRESA
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Sobre MrGeek
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Endereço
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Responsabilidade local
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className='px-4'>
              <ul>
                <li class="font-weight-bold text-uppercase">AJUDA E SUPORTE</li>
                <li>
                  <a href="/" class="col-3text-reset">
                    Política de frete
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Devolução
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Como pedir
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Como rastrear
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Guia de tamanhos
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Contate-nos
                  </a>
                </li>
                <li>
                  <a href="/" class="text-reset">
                    Método de pagamento
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className='px-4'>
              <ul>
                <li class="font-weight-bold text-uppercase">REDES SOCIAIS</li>
                <li>
                  <a href="/" class="text-reset">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="/" class="text-reset">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="/" class="text-reset">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="/" class="text-reset">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Cadastre-se para receber notificações
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Inscreva-se
                  </button>
                </form>
              </ul>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
}

export default Footer;
