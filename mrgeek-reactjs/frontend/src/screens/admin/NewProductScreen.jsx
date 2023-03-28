import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import NewCategoryForm from '../../components/NewCategoryForm';

function NewProductScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState('');
  const [isActive, setIsActive] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  function getCategories() {
    axios
      .get('http://localhost:5000/categories')
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  useEffect(() => {
    getCategories();
    setLoading(false);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      data.append('name', name);
      data.append('image', image);
      data.append('description', description);
      data.append('price', price);
      data.append('category', category);
      data.append('stock', stock);
      data.append('isActive', isActive);

      await axios.post('http://localhost:5000/products/new', data, {
        headers: {
          'Content-Type': 'multipart/ form-data',
        },
      });
      navigate('/admin/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>Produto não encontrado</MessageBox>
      ) : (
        <Row className="my-3">
          <h1 className="text-center mb-3">Cadastrar Produto</h1>
          <section className="d-flex justify-content-center">
            <Form onSubmit={submitHandler} className="w-75">
              <Form.Group
                className="my-3 text-center input-wrapper"
                controlId="name"
              >
                <FloatingLabel
                  label="Nome do Produto"
                  className="mb-3"
                  controlId="name"
                >
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                className="my-3 text-center input-wrapper"
                controlId="price"
              >
                <FloatingLabel label="Preço" className="mb-3" controlId="price">
                  <Form.Control
                    type="number"
                    step="0.01"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                controlId="image"
                className="my-3 text-center input-wrapper"
              >
                <FloatingLabel
                  label="Imagem"
                  className="mb-3"
                  controlId="image"
                >
                  <Form.Control
                    type="file"
                    required
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Row className="select-wrapper">
                <Col md={8}>
                  <Form.Group controlId="category">
                    {loading ? (
                      <LoadingBox />
                    ) : error ? (
                      <MessageBox variant="danger">
                        Categorias não encontradas
                      </MessageBox>
                    ) : (
                      <FloatingLabel label="Categoria" controlId="category">
                        <Form.Select
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Selecione</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4} className="">
                  <NewCategoryForm />
                </Col>
              </Row>

              <Form.Group
                className="my-3 text-center input-wrapper"
                controlId="stock"
              >
                <FloatingLabel
                  label="Estoque"
                  className="mb-3"
                  controlId="stock"
                >
                  <Form.Control
                    type="number"
                    step="1"
                    required
                    onChange={(e) => setStock(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="isActive">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Ativo"
                  className="mb-3"
                  onChange={(e) => setIsActive(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="description">
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
                      border: 'solid 1px',
                      borderRadius: '10px',
                    }}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" className="mb-2 mx-5">
                  Cadastrar
                </Button>
                <Button type="reset" variant="danger" className="mb-2 mx-5">
                  Limpar
                </Button>
              </div>
            </Form>
          </section>
        </Row>
      )}
    </>
  );
}

export default NewProductScreen;
