import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import "./estiloscam.css";
import { Link } from 'react-router-dom';


const PlantillaRetro = (cretro) => {

  const {addToCart, removeFromCart} = useContext (CartContext)

  return (
    <div className= "card" style={{minWidth : "200px"}}>
        <img src={cretro.img}/>
        <div className='card-body'>
            <h2 className='classTitle'>{cretro.name}</h2>
            <h3>${cretro.precio}</h3>
            <Link className='linkDetalle' to={`/item/${cretro.id}`}>Ver detalle</Link>
            <br />           
            <button className='botonAgregar' onClick={() => addToCart(cretro, 1)}> Agregar al carrito </button>
            <button className='botonBorrar' onClick={() => removeFromCart(cretro.id)}> X </button> 
        </div>
    </div>
  )
}

export default PlantillaRetro