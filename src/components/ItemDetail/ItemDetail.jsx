import { React, useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [mostrar, setmostrar] = useState(true);
    const { cart, setCart, isInCart } = useContext(CartContext)

    //agrega el objeto seleccionado al carrito, utilizando IsInCart
    const onAdd = (product, cantidad) => {
        setmostrar(false)
        //definimos el producto a agregar al carrito
        const prodCart = {
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            img: product.img,
            cantidad
        }
        //agregamos a aun carrito auxiliar que luego sera seteado al carrito
        const carritoAux = [...cart]
        carritoAux.push(prodCart)
        if(isInCart(prodCart.id)){
            const newProducts = cart.map(p => {
                if(p.id === prodCart.id){
                    const newProduct = {
                        ...p, cantidad : p.cantidad + cantidad
                    }
                    return newProduct
                }else{
                    return p
                }
            })
            setCart(newProducts)
        }else{
            setCart([...carritoAux])
        }
    }

    //condicional para renderizar boton de compra
    let printmostrar
    if (mostrar) {
        printmostrar = <Counter product={product} onAdd={onAdd} />
    } else {
        printmostrar = <button className='btn btn-success'><Link to="/cart">Comprar</Link></button>
    }


    return (
        <div className='p-5'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`/assets/img/${product.img}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title detailNombre">{product.nombre}</h5>
                            <p className="card-text detailTexto">{product.texto} </p>
                            <p className="card-text py-1 detailTexto">Precio: ${product.precio}</p>
                            <p className="card-text py-1 detailTexto">Estilo de la camiseta: Jugador</p>
                            <p className="card-text py-1 detailTexto">Talles: de S a Xl</p>
                            <p className="card-text py-1 detailTexto">Stock: {product.stock}</p>
                            {printmostrar}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
