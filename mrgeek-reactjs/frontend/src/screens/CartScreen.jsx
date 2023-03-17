import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import FavoriteCard from '../components/FavoriteCard';
import ListGroup from 'react-bootstrap/ListGroup';



function CartScreen() {
  return (
    <div>
      <h1>Carrinho</h1>
      <Row>
        <Col md={8}>
          <ListGroup>
            <ListGroup>
              <Row className="align-items-center">
                <Col md={4}></Col>
              </Row>
            </ListGroup>
          </ListGroup>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default CartScreen;
