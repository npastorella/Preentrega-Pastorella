import React from 'react'
import BotonCompra from './Modal/ModalCam'

const PlantillaRetro = (cretro) => {
  return (
    <div className= "card" style={{minWidth : "200px"}}>
        <img src={cretro.img}/>
        <div className='card-body'>
            <h2 className='classTitle'>{cretro.name}</h2>
            <h3>${cretro.precio}</h3>
            <BotonCompra className="boton" name={cretro.name}/>
        </div>
    </div>
  )
}

export default PlantillaRetro