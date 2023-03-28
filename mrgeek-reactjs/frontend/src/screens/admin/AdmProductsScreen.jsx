import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { formatValue } from 'react-currency-input-field';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function AdmProductsScreen() {
  const navigate = useNavigate();
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get('/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <h1 className="text-center">Produtos</h1>
        <Row className="my-3">
          <Col className="text-center">
            <Link to="/admin/new-product" className="">
              <Button>Cadastrar Novo Produto</Button>
            </Link>
          </Col>
        </Row>
        <Row className="">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Col>
              <Table striped bordered hover variant="success" size="sm">
                <thead className="text-center">
                  <tr>
                    <th>Id</th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Estoque</th>
                    <th>Ativo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr className="align-middle text-center" key={product.id}>
                      <th>{product.id}</th>
                      <th>
                        <img
                          height={100}
                          width={100}
                          src={`../public/productsImages/${product.image}`}
                          className="my-1"
                          alt={product.name}
                        ></img>
                      </th>
                      <th>{product.name}</th>
                      <th>{product.description}</th>
                      <th>
                        {formatValue({
                          value: product.price.toString(),
                          intlConfig: { locale: 'pt-BR', currency: 'BRL' },
                          decimalScale: '2',
                        })}
                      </th>
                      <th>{product.category.name}</th>
                      <th>{product.stock}</th>
                      <th>{product.isActive ? 'Sim' : 'Não'}</th>
                      <th>
                        <Link to={`/admin/products/update/${product.id}`}>
                          <Button variant="warning" className="m-2">
                            Editar
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => {
                            axios
                              .delete(`/admin/product/delete/${product.id}`)
                              .then(() => {
                                navigate('/admin/products');
                              });
                          }}
                        >
                          Excluir
                        </Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          )}
        </Row>
      </Row>
    </Container>
  );
}

export default AdmProductsScreen;
