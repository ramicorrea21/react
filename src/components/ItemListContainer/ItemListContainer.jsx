import {React, useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import { getDocs, collection, where, query } from 'firebase/firestore';
import db from '../../services/firebase'

const ItemListContainer = () => {
    const {categoria} = useParams()

        const [productos, setProductos] = useState([]);

        const getData = async(category) =>{
            try {
                const document = categoria?query(collection(db, "productos"),where("categoria","==",category))
                                        :collection(db, "productos")
                const col = await getDocs(document)
                const result = col.docs.map((doc) => doc={id:doc.id,...doc.data()})
                setProductos(result)
            } catch (error) {
                console.log(error);
            }
        }   

        useEffect(() => {
            getData(categoria)
        }, [categoria,]);



    return (
        <div className='container text-center contProd'><ItemList list ={productos}/></div>
    );
}
export default ItemListContainer;
