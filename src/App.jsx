import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Details } from './components/Details';
import "./index.css"
import { useLoadProducts }  from './newHook';
import { NavBar } from './components/NavBar';
const App = () => {
   const { products } = useLoadProducts("productos");
   console.log(products)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
