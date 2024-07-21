import React, { createContext, useState, useContext } from 'react';
import { getUser } from '../../services/auth';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState(getUser());    
  const [showModal,setShowModal] = useState(false)

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin,currentUser,setCurrentUser,showModal,setShowModal }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  const context = useContext(LoginContext);
  return context;
};

export { LoginProvider, useLogin };
