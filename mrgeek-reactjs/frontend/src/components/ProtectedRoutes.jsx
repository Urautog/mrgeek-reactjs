import { Navigate, Outlet } from 'react-router';
import { useJwt } from 'react-jwt';

const ProtectedRoutes = () => {

  const { decodedToken } = useJwt(sessionStorage.getItem('token'));

  return (
    <>
      {decodedToken &&
        (decodedToken && decodedToken.isAdmin ? (
          <Outlet />
        ) : (
          <Navigate to="/login" />
        ))}
    </>
  );
};

export default ProtectedRoutes;
