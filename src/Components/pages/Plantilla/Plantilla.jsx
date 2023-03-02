import React from 'react'
import "./estiloscam.css";
import BotonCompra from './Modal/ModalCam';

const Plantilla = (camiseta) => {
  return (
    <div className= "card ">
        <img className='estCam' src={camiseta.img}/>
        <div className='card-body'>
            <h2 className='classTitle'>{camiseta.name}</h2>
            <h3>${camiseta.precio}</h3>
            <BotonCompra className="boton" name={camiseta.name}/>
        </div>
    </div>
  )
}

export default Plantilla