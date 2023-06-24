import React from 'react'
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { Electronics } from './components/Electronics';
import { Jewelery } from './components/Jewelery';
import { MensClothing } from './components/MensClothing';
import { WomensClothing } from './components/WomensClothing';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import RegiterPage from './pages/RegiterPage';
import LoginPage from './pages/LoginPage';
import { Navbar } from './components/Navbar';
import { CategoryList } from './components/CategoryList';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <CategoryList />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/electronics' element={<Electronics />} />
          <Route path='/products/jewelery' element={<Jewelery />} />
          <Route path="/products/men's clothing" element={<MensClothing />} />
          <Route path="/products/women's clothing" element={<WomensClothing />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/electronics/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/jewelery/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/men's clothing/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/women's clothing/products/:id" element={<ProductDetailsPage />} />
          <Route path="/register" element={<RegiterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" elemen= {<Favourite />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;