import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import Cart from './Cart/Cart';


const App = () => {
  return (
    <BrowserRouter>
    <>
    <NavBar/>
    <Routes>
    <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
    <Route path='detalle/:id' element={<ItemDetailContainer/>} />
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/contacto' element={<h1>Zona de contacto, proximamente</h1>} />
    <Route path='/sobrenosotros' element={<h1>Sobre Nosotros, proximamente</h1>} />
    <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </> 
    </BrowserRouter>
  );
}

export default App;