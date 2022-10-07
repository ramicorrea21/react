import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import Cart from './Cart/Cart';
import {CartProvider} from '../context/CartContext';
import Checkout from './Checkout/Checkout';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
      <>
      <NavBar/>
      <Routes>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route path='detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      </> 
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
