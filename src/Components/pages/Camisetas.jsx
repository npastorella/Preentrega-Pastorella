import React, { useContext } from 'react';
import {camisetas} from '../../data/dataCamisetas';
import Plantilla from './Plantilla/Plantilla';
import "./Plantilla/estiloscam.css";


const Camisetas = () => {

  
  return (
    <div className='fondo'>
        
        <h2 className='txtbj' >Camisetas Boca</h2>
        <section className='plantilla row'>
            {camisetas.map((camiseta) => {
            return (
                <Plantilla id ={camiseta.id} name ={camiseta.name} precio ={camiseta.price} img ={camiseta.img}/>
            )}
            )}
        </section>
    </div>
  )
}

export default Camisetas