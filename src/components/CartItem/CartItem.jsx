import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';



const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div className='text-start'>
            <div className=''>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`/assets/img/${item.img}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title detailNombre">{item.nombre}</h5>
                            <p className="card-text py-1 detailTexto">Precio: ${item.precio}</p>
                            <p className="card-text py-1 detailTexto">Cantidad: {item.cantidad}</p>
                            <p className="card-text py-1 detailTexto">Total: ${item.precio * item.cantidad}</p>
                            <button className='btn btn-outline-danger' onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CartItem;
