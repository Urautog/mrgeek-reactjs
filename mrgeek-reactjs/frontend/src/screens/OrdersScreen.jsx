import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import MyOrderCard from '../components/MyOrderCard';

function OrdersScreen() {
  return (
    <div>
      <Container>
        <h1 className="text-center my-3">MEUS PEDIDOS</h1>
        <Row>
          <Col md={6} className="w-50">
            <Form.Select
              name="filtro-pedidos"
              class="filtro-pedidos seletor-filtros"
              id=""
              className='success'
            >
              <option value="" selected disabled>
                Filtrar por
              </option>
              <option value="Todos">Todos</option>
              <option value="Concluído">Concluído</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Pendente">Pendente</option>
            </Form.Select>
          </Col>
          <MyOrderCard />
        </Row>

        <img
          className=""
          id="teen-titans"
          src="../public/img/teen-titans.svg"
          alt=""
        />
      </Container>
    </div>
  );
}

export default OrdersScreen;
