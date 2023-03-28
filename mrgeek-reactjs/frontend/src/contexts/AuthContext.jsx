import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('name', response.data.user.name);
      sessionStorage.setItem('authenticated', true);
      setUser(response.data.user);
      setToken(response.data.token);
      setAuthenticated(true);
      setLoginFailed(false);
      navigate('/')
      return;
    } catch (error) {}

    return setLoginFailed(true);
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setUser(null);
    setToken(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        authenticated,
        login,
        logout,
        loginFailed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
