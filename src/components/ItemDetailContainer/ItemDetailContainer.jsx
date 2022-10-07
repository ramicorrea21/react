import {React, useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import db from '../../services/firebase';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productoDetail, setProductoDetail] = useState([]);

    const detalle = async(idProduct) =>{
        try {
            const document = doc(db, "productos", idProduct)
            const res = await getDoc(document)
            const result = {id:res.id, ...res.data()}
            setProductoDetail(result)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        detalle(id)
    }, [id]);

    return (
        <div className='container'><ItemDetail product={productoDetail}/></div>
    );
}

export default ItemDetailContainer;
