import { useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';

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
  const params = useParams();
  const { id } = params;
  const [{ product }, dispatch] = useReducer(reducer, {
    product: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/products/${id}`);
        console.log(result.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, [id]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((item) => item.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/products/${id}`);
    if (data.stock < quantity) {
      window.alert('Produto sem estoque');
      return;
    }
    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quatity: 1 } });
  };

  return (
    <div>
      <Container className="d-flex flex-column align-items-around">
        <Helmet>
          <title>MrGeek | Produto</title>
        </Helmet>

        <Row className="mt-3">
          <Col md={5} className="text-center mb-3">
            <img
              height={300}
              width={300}
              src={`../public/productsImages/${product.image}`}
              alt={product.image}
              class="footer-logo"
            />
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item className='text-end'><h1>R${product.price}</h1></ListGroup.Item>

              <span>
                <strong>Estoque: </strong>
              </span>
              {product.stock > 0 ? (
                <span>Dísponivel</span>
              ) : (
                <span>Indisponível</span>
              )}

              {product.stock > 0 && (
                <ListGroup.Item>
                  <div className="d-flex flex-column w-100">
                    <Button className="mb-2" onClick={addToCartHandler}>
                      Adicionar ao Carrinho
                    </Button>
                    <Button>Favoritos</Button>
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
