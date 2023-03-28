import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import MessageBox from '../components/MessageBox';
// import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import { formatValue } from 'react-currency-input-field';

import axios from 'axios';

function CartScreen() {
  const navigate = useNavigate();

  // const { decodedToken, isExpired } = useJwt(sessionStorage.getItem('token'));

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('items'))) {
      setItems(JSON.parse(localStorage.getItem('items')));
    }
  }, []);

  const deleteItemHandler = (items, id) => {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
    localStorage.setItem('items', JSON.stringify(newArr));
  };

  const submitOrder = (items, user) => {
    let order = [];
    console.log(items);
    order = items.map((item) => {
      return { product_id: item.id };
    });
    axios
      .post(
        'http://localhost:5000/orders',
        { order },
        {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        navigate(`/order-number/${res.data.order_id}`);
        localStorage.clear();
      });
  };

  return (
    <div className="my-3 text-center">
      <h1>Carrinho</h1>
      <Row className="align-items-flex-start">
        {items.length > 0 ? (
          <>
            <Col className="" md={8}>
              {items.map((item) => (
                <Card
                  className="mb-3"
                  key={item.id}
                  style={{ border: '1px solid black' }}
                >
                  <Row className="align-items-center py-2">
                    <Col md={2} className="">
                      <img
                        style={{ height: '70px', width: '70px' }}
                        src={`../public/productsImages/${item.image}`}
                        className=""
                        alt={item.name}
                      ></img>
                    </Col>
                    <Col md={4}>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Col>
                    <Col md={3}>
                      <Card.Text>
                        {formatValue({
                          value: item.price.toString(),
                          intlConfig: { locale: 'pt-BR', currency: 'BRL' },
                          decimalScale: '2',
                        })}
                      </Card.Text>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() => {
                          deleteItemHandler(items, item.id);
                        }}
                        variant="danger"
                      >
                        Remover
                      </Button>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Col>
            <Col md={4}>
              <Card style={{ border: '1px solid black' }}>
                <Card.Title
                  className="mt-3"
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  Finalizar Pedido
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    Subtotal:{' '}
                    {formatValue({
                      value: items
                        .map((item) => item.price)
                        .reduce((prev, curr) => prev + curr, 0)
                        .toString(),
                      intlConfig: { locale: 'pt-BR', currency: 'BRL' },
                      decimalScale: '2',
                    })}
                  </Card.Text>
                  <Card.Text>
                    Frete:{' '}
                    {formatValue({
                      value: '12',
                      intlConfig: { locale: 'pt-BR', currency: 'BRL' },
                      decimalScale: '2',
                    })}
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Total:{' '}
                    {formatValue({
                      value: items
                        .map((item) => item.price)
                        .reduce((prev, curr) => prev + curr, 12)
                        .toString(),
                      intlConfig: { locale: 'pt-BR', currency: 'BRL' },
                      decimalScale: '2',
                    })}
                  </Card.Text>
                  <Button
                    onClick={() => {
                      submitOrder(items);
                    }}
                  >
                    Finalizar Pedido
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </>
        ) : (
          <MessageBox>Seu carrinho está vazio!</MessageBox>
        )}
      </Row>
    </div>
  );
}

export default CartScreen;
