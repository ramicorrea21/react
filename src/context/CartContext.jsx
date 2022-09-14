    import {React, createContext, useState} from 'react';
    
    export const CartContext = createContext()
    
    const CartContextProvider = (props) => {
        const [ProductosEnCart, setProductosEnCart] = useState([{}]);
        const addCart = (product, cantidad) =>{
            setProductosEnCart(ProductosEnCart.push({product, cantidad}))
        }
        const sliceCart = (product) =>{
            setProductosEnCart(ProductosEnCart.slice(ProductosEnCart.findIndex(item => item.id === product.id), 1))
        }
        return (
            <>
                <CartContext.Provider value={{ProductosEnCart, addCart, sliceCart}}>{props.children}</CartContext.Provider>
            </>
        );
    }
    
    export default {CartContext, CartContextProvider};
    