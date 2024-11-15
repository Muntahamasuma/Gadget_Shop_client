import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const {googlelogin} = useAuth();
  const navigate = useNavigate();

  const handleGoogle= () =>{
    googlelogin().then(()=>{
      navigate("/")
    });
    
  }
  return (
    <div>
      <div className="divider">OR</div>
      <div>
        <button onClick={handleGoogle} className='btn btn-outline w-full text-lg '>
          <FcGoogle></FcGoogle>Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;