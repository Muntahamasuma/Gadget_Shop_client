import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';
import useUserData from '../Hooks/useUserData';

const SellerRoute = ({children}) => {
  const {user, loading} = useAuth();
  const userData = useUserData();
  const location = useLocation();

  if(loading || !userData.role){
    return <Loading/>
  }
  if(user && userData.role === "seller"){
    return children
  }
  return <Navigate to='/' state={{from: location}} replace> </Navigate >
};

export default SellerRoute;