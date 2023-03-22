import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { CartContext } from '../Context/CartContext';
import { camisetas } from '../../data/dataCamisetas';
import "./itemDetail.css";



const ItemDetail = () => {

    const { camId } = useParams()    
      
    const { addToCart, removeFromCart } = useContext(CartContext)
  
    const selectItem = camisetas.find(product => product.id == camId)
    console.log(selectItem);
    console.log(camId);
    
    return (
      <div className='card'>      
        <img src={selectItem.img} alt="" />
        <h2>{selectItem.name}</h2>
        <p>Price: ${selectItem.price}</p>
        <button className='botonAdd' onClick={() => addToCart(selectItem, 1)}>
          Agregar al carrito
        </button>
        <button className='botonRemove' onClick={() => removeFromCart(selectItem.id)}>X</button>
      </div>
    );
  }
  
  export default ItemDetail