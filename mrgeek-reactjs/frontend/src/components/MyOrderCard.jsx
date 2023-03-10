import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function MyOrderCard(props) {
  const { order } = props;

  return (
    <Row className="orders-cards my-3 justify-content-center">
      <Card class="item-lista">
        <Col md={3} className="">
          <div class="numero-pedido">
            <Row>
              <strong>Número do pedido</strong>
            </Row>
            <Row>
              <span>#1234567890</span>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div class="status-pedido">
            <Row>
              <strong>Status</strong>
            </Row>
            <Row>
              <span>Concluído</span>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div class="data-pedido">
            <Row>
              <strong>Data</strong>
            </Row>
            <Row>
              <span>10/10/2022</span>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div class="pagamento-pedido">
            <Row>
              <strong>Pagamento</strong>
            </Row>
            <Row>
              <span>Boleto Bancário</span>
            </Row>
          </div>
        </Col>
      </Card>
    </Row>
  );
}

export default MyOrderCard;
