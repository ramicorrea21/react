import {React, useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
const productosDetail = [
    {nombre:"Seleccion Argentina Qatar 2022" ,stock: "10", precio:"10000", id:1, img:"arg.jpg", texto:"Nueva Camiseta de la Seleccion Argentina Qatar 2022 Messi", categoria:"Seleccion"},
    {nombre:"Seleccion Brasilera Qatar 2022", stock: "12", precio:"9500", id:2, img:"brasil.jpg", texto:"Nueva Camiseta de la Seleccion Brasilera Qatar 2022 Neymar", categoria:"Seleccion"},
    {nombre:"Seleccion Uruguaya Qatar 2022", stock: "9", precio:"11500", id:3, img:"uru.jpg", texto:"Nueva Camiseta de la Seleccion Uruguaya Qatar 2022 Suarez", categoria:"Seleccion"},
    {nombre:"Seleccion Alemana Qatar 2022", stock: "15", precio:"9000", id:4, img:"alemania.jpg", texto:"Nueva Camiseta de la Seleccion Alemana Qatar 2022 Havertz", categoria:"Seleccion"},
    {nombre:"Seleccion Francia Qatar 2022", stock: "10", precio:"10000", id:5, img:"francia.jpg", texto:"Nueva Camiseta de la Seleccion Francesa Qatar 2022 Mbappe", categoria:"Seleccion"},
    {nombre:"Seleccion España Qatar 2022", stock: "12", precio:"9500", id:6, img:"españa.jpg", texto:"Nueva Camiseta de la Seleccion Española Qatar 2022 Pedri", categoria:"Seleccion"},
    {nombre:"Inter suplente 2021", stock: "14", precio:"8900", id:8, img:"inter.jpg", texto:"Camiseta del Inter suplente 2021 Serpientes Lautaro Martinez", categoria:"Club"},
    {nombre:"Manchester City Julian Alvarez Titular", stock: "16", precio:"10000", id:9, img:"city.jpg", texto:"Nueva Camiseta del Manchester City Titular para 2022 Julian Alvarez",categoria:"Club"},
    {nombre:"Real Madrid Champions 2021", stock: "20", precio:"12000", id:10, img:"real.jpg", texto:"Camiseta del Real Madrid Campeon de Champions 2022 Benzema", categoria:"Club"},
    {nombre:"Psg Messi", stock: "9", precio:"11500", id:11, img:"psg.jpg", texto:"Camiseta del Paris Saint Germain temporada 2021/2022 Messi", categoria:"Club"},
    {nombre:"Fiorentina Batistuta 1999", stock: "12", precio:"9000", id:12, img:"fiorentina.jpg", texto:"Camiseta con cuello de la Fiorentina temporada 98/99 Batistuta", categoria:"Club"},
    {nombre:"Arsenal o2 Henry", stock: "17", precio:"10000", id:13, img:"arsenal.jpg", texto:"Camiseta del Arsenal Retro temporada 99 Thierry Henry", categoria:"Club"},
    {nombre:"Nigeria Mundial 2018", stock: "8", precio:"9500", id:14, img:"nigeria.jpg", texto:"Camiseta de la Seleccion Nigeriana usada en el Mundial 2018 Mussa", categoria:"Seleccion"},
    {nombre:"Juventus suplente 2015", stock: "15", precio:"9000", id:16, img:"juve.jpg", texto:"Camiseta Suplente de la Juventus Temporada 2015 Dybala", categoria:"Club"},
]
function obtenerProductos(confirmacion){
    return new Promise ((res,rej) => {
        if (confirmacion){
            res(productosDetail)
        }else{  
            rej("acceso denegado")
        }
    }) 
}

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productoDetail, setProductoDetail] = useState([]);
    useEffect(() => {
        obtenerProductos(true)
    .then(data => {
        setProductoDetail(productosDetail.find(productoDetail => productoDetail.id === Number(id)))
    })
    .catch(error =>{
        console.error(error);
    })
    }, [id]);

    return (
        <div className='container'><ItemDetail product={productoDetail}/></div>
    );
}

export default ItemDetailContainer;
