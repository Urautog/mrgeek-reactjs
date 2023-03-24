import { Navigate, Outlet } from 'react-router';
import { useJwt } from 'react-jwt';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
  const context = useContext(AuthContext);
  const { decodedToken, isExpired } = useJwt(context.token);

  console.log('ProtectedRoute');
  console.log(context);

  return (
    <>
      {decodedToken && context.user && context.user.isAdmin ? (
        <Outlet />
      ) : (
        <Navigate to="login" />
      )}
      ;
    </>
  );
};

export default ProtectedRoutes;
