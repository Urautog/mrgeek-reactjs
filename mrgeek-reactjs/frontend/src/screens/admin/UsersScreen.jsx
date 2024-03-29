import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';

import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

function UsersScreen() {
  const navigate = useNavigate();
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  // function deleteUser(e, id) {
  // e.preventDefault();
  //   axios.delete(`/admin/delete/${id}`);
  // }

  function getUsers() {
    axios
      .get('http://localhost:5000/users')
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  const deleteUser = (user_id) => {
    axios.delete(`/admin/delete/${user_id}`);
    toggleShowA();
    navigate('/admin/products');
  };

  useEffect(() => {
    getUsers();
    setLoading(false);
  }, []);

  return (
    <Container className="my-3">
      <h1 className="text-center">Usuários</h1>
      <div className="">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            <Col>
              <Toast
                show={showA}
                onClose={toggleShowA}
                delay={2000}
                autohide
                bg="warning"
                className="mx-auto text-center"
              >
                <Toast.Body>Usuário excluído!</Toast.Body>
              </Toast>
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
                      <th>{user.firstName + ' ' + user.lastName}</th>
                      <th>{user.email}</th>
                      <th>{user.tel}</th>
                      <th>{user.isAdmin ? 'Sim' : 'Não'}</th>
                      <th>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteUser(user.id);
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
          </Row>
        )}
      </div>
    </Container>
  );
}

export default UsersScreen;
