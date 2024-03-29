import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useJwt } from 'react-jwt';
import Toast from 'react-bootstrap/Toast';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, payload: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const { decodedToken } = useJwt(sessionStorage.getItem('token'));

  const params = useParams();
  const product_id = params.id;
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const [{ product }, dispatch] = useReducer(reducer, {
    product: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/products/${product_id}`);
        console.log(result.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, [product_id]);

  const addToCartHandler = async () => {
    setItems([...items, product]);
    toggleShowA();
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));

    console.log(`Saved ${items.length} items to localstorage`);
  }, [items]);

  return (
    <div>
      <Container className="d-flex flex-column align-items-around my-3">
        <Helmet>
          <title>MrGeek | Produto</title>
        </Helmet>
        <Toast
          show={showA}
          onClose={toggleShowA}
          delay={2000}
          autohide
          bg="warning"
          className="mx-auto text-center"
        >
          <Toast.Body>Produto adicionado ao carrinho!</Toast.Body>
        </Toast>

        <Row className="mt-3">
          <Col md={5} className="text-center mb-3 image-product-card">
            <img
              height={300}
              width={300}
              src={`../public/productsImages/${product.image}`}
              alt={product.image}
              className="footer-logo"
            />
          </Col>
          <Col md={7} className="card-price-product">
            <ListGroup variant="flush">
              <ListGroup.Item className="text-center">
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                <h1>R${product.price}</h1>
              </ListGroup.Item>

              <span className="text-center">
                <strong>Estoque </strong>
              </span>
              {product.stock > 0 ? (
                <span className="text-center">Dísponivel</span>
              ) : (
                <span className="text-center">Indisponível</span>
              )}

              {product.stock > 0 && (
                <ListGroup.Item>
                  <div className="d-flex flex-column w-100 px-5">
                    {decodedToken && (
                      <Button className="mb-2" onClick={addToCartHandler}>
                        Adicionar ao Carrinho
                      </Button>
                    )}
                    {!decodedToken && (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <Button className='w-100'>Login</Button>
                    </Nav.Link>
                  </LinkContainer>
                )}
                  </div>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="m-auto">
            <Card className="product-description mb-3">
              <Card.Title className="px-3 mt-2">Descrição</Card.Title>
              <Card.Body className="mt-1 py-0 px-3">
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductScreen;
