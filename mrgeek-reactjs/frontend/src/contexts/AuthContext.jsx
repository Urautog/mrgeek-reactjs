import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  console.log('user provider');
  console.log(user);
  console.log('token provider');
  console.log(token);

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
      return;
    } catch (error) {}

    return setLoginFailed(true);
  };

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    setToken(null);
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
