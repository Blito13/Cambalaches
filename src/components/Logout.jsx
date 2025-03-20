// components/Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/sessionSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch de la acción de cerrar sesión
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;