import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './product/Product';
import AddForm from './product/AddForm';
import UpdateForm from './product/UpdateForm';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/update" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
