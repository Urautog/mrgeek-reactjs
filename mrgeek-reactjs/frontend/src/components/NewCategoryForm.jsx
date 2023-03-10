import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

function NewCategoryForm() {
  const [name, setName] = useState('');

  const submitHandler = async (e) => {
    console.log(e);
    e.preventDefault();
    try {
      const { data } = await axios.post('admin/new-category', {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        <Form onSubmit={submitHandler}>
          <Form.Group className="text-center input-wrapper">
            <FloatingLabel controlId="name" label="Nova Categoria" className="mb-3">
              <Form.Control type="text" required />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" className="w-100">
            Adicionar Categoria
          </Button>
        </Form>
      </Row>
    </>
  );
}

export default NewCategoryForm;
