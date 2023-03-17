import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function CardAddress(props) {

  return (
    <Link to="/" className="text-decoration-none text-reset">
      <Row className="mb-3 px-3">
        <Card className="flex-row align-items-center address-cards">
          <Col md={6}>
            <Card.Title className='pt-2'>Nome Endereço</Card.Title>
            <Card.Body>
              <Card.Text>
                Rua da Tramoia, 171, 08876898, Jardim dos predios
              </Card.Text>
            </Card.Body>
          </Col>
        </Card>
      </Row>
    </Link>
  );
}

export default CardAddress;
