import { Navigate, Outlet } from 'react-router';
import { useJwt } from 'react-jwt';

const PrivateRoutes = () => {

  const { decodedToken } = useJwt(sessionStorage.getItem('token'));

  console.log('Private');
  console.log(decodedToken);

  return (
    <>
      {decodedToken && (decodedToken ? <Outlet /> : <Navigate to="/login" />)}
    </>
  );
};

export default PrivateRoutes;
