import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyOrderCard({ order }) {
  return (
    <Row className="orders-cards my-3 justify-content-center">
      <Card className="item-lista">
        <Col md={6} className="">
          <div className="numero-pedido">
            <Row>
              <strong>Número do pedido</strong>
            </Row>
            <Row>
              <span>{order.order_id}</span>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <div className="status-pedido">
            <Row>
              <strong>Status</strong>
            </Row>
            <Row>
              <span>{order.status}</span>
            </Row>
          </div>
        </Col>
        {/* <Col md={3}>
          <div className="data-pedido">
            <Row>
              <strong>Data</strong>
            </Row>
            <Row>
              <span>10/10/2022</span>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className="pagamento-pedido">
            <Row>
              <strong>Pagamento</strong>
            </Row>
            <Row>
              <span>Boleto Bancário</span>
            </Row>
          </div>
        </Col> */}
      </Card>
    </Row>
  );
}

export default MyOrderCard;
