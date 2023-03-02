import React from 'react';
import {camisetas} from '../Data/dataCamisetas';
import Plantilla from './Plantilla/Plantilla';
import "./Plantilla/estiloscam.css"

const Camisetas = () => {
  return (
    <div>
        
        <h2>Camisetas Boca</h2>
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