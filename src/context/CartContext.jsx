import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (prodCart) => {
        const carritoAux = [...cart]
        carritoAux.push(prodCart)
        console.log(carritoAux);
        setCart(carritoAux)
        console.log(cart);
    }


    return (
        <CartContext.Provider value={{ cart, addItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider