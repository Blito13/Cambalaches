// components/Profile.js
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.session.user); // Obtiene el usuario del estado
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated); // Obtiene el estado de autenticación
  console.log(user, isAuthenticated)
  if (!isAuthenticated) {
    return <p>Por favor, inicia sesión.</p>;
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Email: {user.email}</p>
      <p>Nombre: {user.name}</p>
    </div>
  );
};

export default Profile;