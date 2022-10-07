import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import db from '../../services/firebase';

const Checkout = () => {
const {cart, getTotal, clear} = useContext(CartContext);
const [idOrder, setIdOrder] = useState();
//defiendo el objeto que captura los datos del formulario
    const [comprar, setComprar] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    });
    const {Nombre, Email, Telefono} = comprar

    //captura los datos escritos en los imput
    const handleInputChange = (e) =>{
        setComprar(({
            ...comprar,
            [e.target.name] : e.target.value
        }))
    }

    //recopila los datos al enviar el formulario para generar una orden
    const handleSubmit = (e) =>{
        e.preventDefault()
        const items = cart.map(e=>{return{id: e.id, titulo: e.nombre, precio: e.precio, cant: e.cantidad}})
        const dia = new Date()
        const total = getTotal()
        const data = {comprar,items,dia,total}
        generarOrder(data)
    }

    //genera una orden en la base de datos
    const generarOrder = async(data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log('orderNro', order);
            setIdOrder(order.id)
            clear()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='mt-5'>
            {!idOrder?
            (<div className='text-center' >
            <h1>Completar Formulario para finalizar la compra</h1>
            <div className='m-2 p-2'>
            <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                            className='mb-2'
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                            className='mb-2'
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                            className='mb-2'
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success m-1"
                        />
                    </form>
            </div>

            </div>)

            :
            <div className='text-center'>
                <h2 className='text-success'>Gracias por comprar en Templo de la Camiseta!</h2>
                <h4>Su numero de orden es: {idOrder}</h4>
            </div>
            }
        </div>
    );
}

export default Checkout;
