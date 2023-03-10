import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import Button from 'react-bootstrap/esm/Button';

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
    <div className="">
      <h1 className="text-center">Produtos</h1>
      <div className="">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            <Col>
              <Table striped bordered hover variant="success" size="sm">
                <thead className="text-center">
                  <tr>
                    <th>Id</th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Estoque</th>
                    <th>Ativo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr className="align-middle text-center">
                      <th>{product.id}</th>
                      <th>
                        <img
                          height={70}
                          src={`../public/productsImages/${product.image}`}
                          className="card-img-top mt-3"
                          alt={product.name}
                        ></img>
                      </th>
                      <th>{product.name}</th>
                      <th>{product.description}</th>
                      <th>{product.category.name}</th>
                      <th>{product.stock}</th>
                      <th>{product.isActive ? 'Sim' : 'Não'}</th>
                      <th>
                        <Button variant="warning" className="m-2">
                          Editar
                        </Button>
                        <Button variant="danger">Excluir</Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}

export default AdmProductsScreen;
