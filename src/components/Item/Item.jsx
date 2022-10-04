import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'
const Item = ({producto}) => {
    return (
        <div className="card productos" style={{width: '18rem'}}>
            <img src={`/assets/img/${producto.img}`} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <p className="card-title Producto">{producto.nombre}</p>
                <p className="card-text text-center Producto">${producto.precio}</p>
                <Link to={`/detalle/${producto.id}`}>
                <button className='btn btn-primary '>Ver Detalles</button>
                </Link>
            </div>
        </div>
    );
}
export default Item
