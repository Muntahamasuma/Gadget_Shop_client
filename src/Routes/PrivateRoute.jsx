import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
  const location = useLocation();

  if(loading){
    return <Loading/>
  }
  if(user){
    return children
  }
  return <Navigate to='/' state={{from: location}}></Navigate>
};

export default PrivateRoute;