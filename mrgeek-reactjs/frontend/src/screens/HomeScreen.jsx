import { useEffect, useReducer } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

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

function HomeScreen() {
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
    <Container className="">
      <Row className="mt-3">
        <Figure>
          <Figure.Image
            width={1400}
            height={600}
            alt=""
            src="../public/img/oferta.png"
          />
        </Figure>
      </Row>
      <Row className='justify-content-center'>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row className="justify-content-center">
            {products.map((product, index) => ( index < 4 ? (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
                <ProductCard product={product}></ProductCard>
              </Col>
            ) : (null)
            ))}
          </Row>
        )}
      </Row>
      <Carousel className="my-3">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/img/first.jpg"
            alt="Primeiro Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/img/first.jpg"
            alt="Segundo Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/img/first.jpg"
            alt="Terceiro Slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HomeScreen;
