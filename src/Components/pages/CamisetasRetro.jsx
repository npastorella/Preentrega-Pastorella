import React from 'react';
import {retro} from '../../data/dataRetro';
import PlantillaRetro from './Plantilla/PlantillaRetro';
import "./Plantilla/estiloscam.css"

const CamisetasRetro = () => {
  return (
    <div className='fondo'>
        <h2 className='txtbj' >Camisetas Boca</h2>
        <section className='plantilla row'>
            {retro.map((cretro) => {
            return (
                <PlantillaRetro id ={cretro.id} name ={cretro.name} precio ={cretro.price} img ={cretro.img}/>
            )}
            )}
        </section>
    </div>
  )
}

export default CamisetasRetro