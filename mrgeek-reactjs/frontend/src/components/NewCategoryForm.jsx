import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from 'react-router-dom';

function NewCategoryForm() {
  const navigate = useNavigate();
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const [name, setName] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:5000/categories', {
          name,
        })
        .then(toggleShowA())
        .then(navigate('/admin/products'));

      console.log('Enviado');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="">
        <Col className="d-flex flex-column align-items-around">
          <Form.Group className="text-center input-wrapper" controlId="name">
            <FloatingLabel label="Nova Categoria" className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Toast
            show={showA}
            onClose={toggleShowA}
            delay={2000}
            autohide
            bg="warning"
            className="mx-auto text-center"
          >
            <Toast.Body>Categoria criada!</Toast.Body>
          </Toast>
          <Button type="submit" className="w-100" onClick={submitHandler}>
            Adicionar Categoria
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default NewCategoryForm;
