import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const googlelogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser)
    });
    return () => {
      return unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googlelogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
  )
};

export default AuthProvider;
