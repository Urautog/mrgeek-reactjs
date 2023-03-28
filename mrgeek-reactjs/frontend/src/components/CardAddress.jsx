import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardAddress({ address }) {
  console.log('Card Address');
  console.log(address);

  return (
    <>
      <Link to="/" className="text-decoration-none text-reset">
        <Row className="mb-3 px-3">
          <Card className="flex-row align-items-center address-cards">
            <Col md={6}>
              <Card.Title className="pt-2">Endereço</Card.Title>
              <Card.Body>
                <Card.Text>
                  {address.street}, {address.number}, {address.district},{' '}
                  {address.city} - {address.state} - {address.zipcode}
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
      </Link>
    </>
  );
}

export default CardAddress;
