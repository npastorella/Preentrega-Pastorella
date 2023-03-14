import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import "./estiloscam.css";
import BotonCompra from './Modal/ModalCam';
import { Link } from 'react-router-dom';


const Plantilla = (camiseta) => {

  const {addToCart, removeFromCart} = useContext (CartContext)

  return (
    <div className= "card ">
        <img className='estCam' src={camiseta.img}/>
        <div className='card-body'>
            <h2 className='classTitle'>{camiseta.name}</h2>
            <h3>${camiseta.precio}</h3>
            <Link className='linkDetalle' to={`/item/${camiseta.id}`}>Ver detalle</Link>
            <br />
            {/* <BotonCompra className="boton" name={camiseta.name}/> */}
            <button className='botonAgregar' onClick={() => addToCart(camiseta, 1)}> Agregar al carrito </button>
            <button className='botonBorrar' onClick={() => removeFromCart(camiseta.id)}> X </button>

        </div>
    </div>
  )
}

export default Plantilla