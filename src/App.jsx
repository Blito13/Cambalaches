import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Details } from './components/Details';
import { useFetch } from './useFetch';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Profile from './components/Profile';

const App = () => {
   const { products } = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/signIn">Register</Link>
        <Link to="/settings">settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signIn" element={<Register />} />
        <Route path="/settings" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
