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
      return { ...state, users: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function UsersScreen() {
  const [{ loading, error, users }, dispatch] = useReducer(reducer, {
    users: [],
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
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Admin</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr className="align-middle text-center">
                      <th>{user.id}</th>
                      <th>{user.firstName + " " + user.lastName}</th>
                      <th>{user.email}</th>
                      <th>{user.tel}</th>
                      <th>{user.isAdmin ? 'Sim' : 'Não'}</th>
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

export default UsersScreen;
