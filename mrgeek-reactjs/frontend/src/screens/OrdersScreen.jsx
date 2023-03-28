import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyOrderCard from '../components/MyOrderCard';
import axios from 'axios';
import MessageBox from '../components/MessageBox';

function OrdersScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/profile/orders', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log('orders');
        console.log(res.data);
        setOrders(res.data);
      });
  }, []);

  return (
    <div>
      <Container className="d-flex flex-column ">
        <h1 className="text-center my-3">MEUS PEDIDOS</h1>
        {orders && ( 
          <Row>
          {orders ? (
            orders.map((order) => {
              return <MyOrderCard order={order} />;
            })
          ):(<MessageBox variant='danger'>Você não possui pedidos!</MessageBox>)}
            
          </Row>
        )}

        <img
          className="mx-auto"
          id="teen-titans"
          src="../public/img/teen-titans.svg"
          alt=""
        />
      </Container>
    </div>
  );
}

export default OrdersScreen;
