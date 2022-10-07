import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(e => e.id === id)
        }

    const removeItem = (id) =>{
        setCart( cart.filter(e=> e.id !== id));
    }

    const getQuantity = () => {
        let cant = 0
        cart.forEach(e => cant += e.cantidad)
        return cant
    };

    const getTotal = () => {
        let total = 0
        cart.forEach(e => total += (e.cantidad*e.precio))
        return total        
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, isInCart, removeItem, getQuantity, getTotal, clear}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext }