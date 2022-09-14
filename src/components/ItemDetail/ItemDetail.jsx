import {React, useState, useContext} from 'react';
import Counter from '../Counter/Counter';
import "./ItemDetail.css"
import {Link} from 'react-router-dom'
import { CartContext} from '../../context/CartContext';
const ItemDetail = ({product}) => {
    const [mostrar, setmostrar] = useState(true);
    const {addCart} = useContext(CartContext)
    const onAdd = (cantidad)=>{
        console.log(cantidad);
        setmostrar(false)
        addCart(product, cantidad)
    }
    let printmostrar
    if (mostrar) {
        printmostrar = <Counter product={product} onAdd={onAdd}/>
    }else{
        printmostrar = <button className='btn btn-success'><Link to="/cart">Comprar</Link></button>
    }
    return (
        <div className='p-5'>
            <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
            <img src={`/assets/img/${product.img}`}  className="img-fluid rounded-start" alt="..." />
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
