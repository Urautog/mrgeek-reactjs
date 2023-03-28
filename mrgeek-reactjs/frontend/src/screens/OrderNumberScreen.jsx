import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

function OrderNumberScreen() {
  const { id } = useParams();

  return (
    <div>
      <Container className="my-3 text-center">
        <Row className="justify-content-center">
          <h1>Pedido realizado, número do pedido:</h1>
          <Card style={{ paddingTop: '10px', width: '60%' }}>
            <Card.Title style={{ fontSize: '2rem' }}>#{id}</Card.Title>
          </Card>
        </Row>

        <img src="../public/img/Goku.svg" alt="" />
      </Container>
    </div>
  );
}

export default OrderNumberScreen;
