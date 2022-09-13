import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {
    return <div className='container row'> 
        {list.map((producto, index) => <Item producto={producto} key={producto.id} />)}
        </div>
}

export default ItemList;
