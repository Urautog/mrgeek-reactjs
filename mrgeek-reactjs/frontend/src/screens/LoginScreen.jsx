import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import MessageBox from '../components/MessageBox';

function LoginScreen() {
  // const navigate = useNavigate();
  const context = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    context.login(email, password);
  };

  return (
    <div className="w-100 m-auto bg-dragon">
      <Container className=" w-50 small-container">
        <Helmet>
          <title>MrGeek | Login</title>
        </Helmet>
        <h1 className=" text-center my-3">LOGIN</h1>
        {context.loginFailed ? (
          <MessageBox variant="danger">Email ou senha inválidos!</MessageBox>
        ) : null}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 input-wrapper" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 input-wrapper" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="my-3 text-center ">
            <Button type="submit" className="mx-3 w-25">
              Entrar
            </Button>
            <Button className="mx-3 w-25">
              <Link to="/register" className="text-decoration-none text-reset">
                Cadastrar
              </Link>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default LoginScreen;
