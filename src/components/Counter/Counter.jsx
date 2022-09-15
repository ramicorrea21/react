import {React, useState} from 'react';

const Counter = ({product, onAdd}) => {
    const [cantidad, setcantidad] = useState(1);
    const cantidadProducto = (operacion) =>{
        if(operacion === "+"){
            if(cantidad < product.stock){
                setcantidad(cantidad + 1)
            }
        }else{
            if(cantidad > 1){
                setcantidad(cantidad - 1)
            }
        }
    }
    return (
        <>
            <button className='btn btn-primary' onClick={() => onAdd(product, cantidad)}>Agregar al Carrito</button>
            <button className='btn btn-dark m-3' onClick={() => cantidadProducto("+")}> 
                +
            </button>
            {cantidad}
            <button className='btn btn-outline-dark m-3' onClick={() => cantidadProducto("-")}>
                -
            </button>
        </>
    );
}
export default Counter;
