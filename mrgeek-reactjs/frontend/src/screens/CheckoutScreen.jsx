import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import ProductCard from '../components/ProductCard';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function CheckoutScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get('/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="my-3">
      <h1 className='text-center'>FINALIZAR PEDIDO</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card style={{ border: 'solid 2px' }}>
            <Row>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2>Detalhes da Compra</h2>
                </Card.Title>
                {products.map((product) => (
                  <Card.Text key={product.id} className="checkout-card-text">
                    <Row className="flex-nowrap w-100 align-items-center">
                      <Col md={4}>
                        <Figure>
                          <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={`../public/productsImages/${product.image}`}
                          />
                        </Figure>
                      </Col>
                      <Col md={10}>
                        <Card.Text>{product.name}</Card.Text>
                        <Card.Text>R$ {product.price}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Text>
                ))}
              </Card.Body>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ border: 'solid 2px' }}>
            <Card.Body>
              <Card.Title className="text-center">Pagamento</Card.Title>
              <Card.Text className="checkout-card-text">
                Subtotal:{' R$ '}
                {products
                  .map((product) => product.price)
                  .reduce((prev, curr) => prev + curr, 0)}{' '}
              </Card.Text>
              <Card.Text className="checkout-card-text">Frete: </Card.Text>
              <Card.Text className="checkout-card-text">
                Total:{' R$ '}
                {products
                  .map((product) => product.price)
                  .reduce((prev, curr) => prev + curr, 0) + 12}{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutScreen;
