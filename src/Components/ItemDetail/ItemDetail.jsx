import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { camisetas } from '../../data/dataCamisetas';
import "./itemDetail.css";



const ItemDetail = () => {

    const { camId } = useParams()    
      
    const { addToCart, removeFromCart } = useContext(CartContext)
  
    const selectItem = camisetas.find(product => product.id == camId)

    console.log(selectItem)

    return (
      <div className='fondoId'>
        <div className='cardId'>      
          <img src={selectItem.img} alt="" />
          <h2>{selectItem.name}</h2>
          <p>Precio: $ {selectItem.price}</p>    
          <button className="botonContador" onClick={() => addToCart( selectItem, +1)}>
          +
          </button>
          <button className='botonAdd' onClick={() => addToCart(selectItem, 1)}>
            Agregar al carrito
          </button>
          <button className="botonContador" onClick={() => addToCart(selectItem, -1)}>
          -
          </button>
          <br />
          <button className='botonRemove' onClick={() => removeFromCart(selectItem.id)}>X</button>
        </div>
      </div>
    );
  }
  
  export default ItemDetail