import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import NewCategoryForm from '../../components/NewCategoryForm';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function NewProductScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');
  const [isActive, setIsActive] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = async (e) => {
    console.log(e);
    e.preventDefault();
    try {
      const { data } = await axios.post('admin/new-product', {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="my-3">
        <h1 className="text-center mb-3">Cadastrar Produto</h1>
        <section className="d-flex justify-content-center">
          <Form
            onSubmit={submitHandler}
            className="w-75"
            enctype="multipart/form-data"
          >
            <Form.Group className="my-3 text-center input-wrapper">
              <FloatingLabel
                controlId="name"
                label="Nome do Produto"
                className="mb-3"
              >
                <Form.Control type="text" required />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="my-3 text-center input-wrapper">
              <FloatingLabel controlId="price" label="Preço" className="mb-3">
                <Form.Control type="number" step="0.01" required />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="my-3 text-center input-wrapper">
              <FloatingLabel controlId="image" label="Imagem" className="mb-3">
                <Form.Control type="file" step="0.01" required />
              </FloatingLabel>
            </Form.Group>
            <Row className="select-wrapper">
              <Col md={8}>
                <FloatingLabel controlId="category" label="Categoria">
                  <Form.Select aria-label="">
                    <option>Selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={4} className="">
                <NewCategoryForm />
              </Col>
            </Row>

            <Form.Group className="my-3 text-center input-wrapper">
              <FloatingLabel controlId="stock" label="Estoque" className="mb-3">
                <Form.Control type="number" step="1" required />
              </FloatingLabel>
            </Form.Group>

            <Form.Check
              type="switch"
              id="custom-switch"
              label="Ativo"
              name="isActive"
              className="mb-3"
            />

            <FloatingLabel
              controlId="description"
              label="Descrição"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder=""
                style={{
                  height: '100px',
                  border: 'solid 2px',
                  borderRadius: '10px',
                }}
              />
            </FloatingLabel>

            <div className="d-grid gap-2">
              <Button type="submit" className="mb-2 mx-5">
                Cadastrar
              </Button>
              <Button variant="danger" className="mb-2 mx-5">
                Limpar
              </Button>
            </div>
          </Form>
        </section>
      </Row>
    </>
  );
}

export default NewProductScreen;
