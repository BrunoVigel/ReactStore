import React from 'react';
import Navbar from "./components/Navbar";
import './App.css'
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path='/products/:id' element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
