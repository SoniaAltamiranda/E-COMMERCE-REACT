import React from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom';
import Cart from './modules/Cart';
import About from './components/About';
import Contact from './components/Contact'
import Home from './modules/Home';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';




function App(){

  return (
    <>
   <Header/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/categories/:name' element={<CategoryProducts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
