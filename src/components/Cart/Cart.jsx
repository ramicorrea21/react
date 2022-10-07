import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, getTotal, clear } = useContext(CartContext);

    return (
        <div className="container text-center">
            <h1>Carrito de compras</h1>
            <hr />
            {cart.length !== 0 ? (
                <div className="p-2">
                    <div className="p-3">
                        {cart.map((e) => (
                            <CartItem key={e.id} item={e} />
                        ))}
                        <br />
                        {`A pagar:  $ ${getTotal()}`}
                        <br />
                        <button className="btn btn-outline-danger" onClick={clear}>
                            Vaciar Carrito
                        </button>
                        <br />
                        <br />
                        <Link to="/checkout">
                            <button className="btn btn-outline-success">Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="p-5">
                    <h3>El carrito esta vacio!!</h3>
                    <button className="btn btn-outline-info"><Link to="/">Ir a la tienda</Link></button>
                </div>
            )}
        </div>
    );
};

export default Cart;
