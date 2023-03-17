import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

function NewCategoryForm() {
  const [name, setName] = useState('');

  const submitHandler = async (e) => {
    console.log(e);
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/categories', {
        name,
      });
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
          <Button type="submit" className="w-100" onClick={submitHandler}>
            Adicionar Categoria
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default NewCategoryForm;
