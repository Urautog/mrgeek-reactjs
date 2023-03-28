import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FavoriteCard(props) {
  // const { product } = props;

  return (
    <Link to="/" className='text-decoration-none text-reset'>
        <Row className="favorites-cards mb-3">
          <Card className="flex-row align-items-center">
            <Col md={3}>
              <img src="../public/img/Product.png" alt="Produto" />
            </Col>
            <Col md={6}>
              <strong>
                <p>Descrição</p>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                blanditiis adipisci asperiores.
              </p>
            </Col>
            <Col md={3} className="flex-column text-center m-3">
              <h2>R$ 9999,99</h2>
              <Button size="lg" className="mt-3">
                Ver produto
              </Button>
            </Col>
          </Card>
        </Row>
        </Link>
  );
}

export default FavoriteCard;
