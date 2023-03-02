import React from 'react';
import {retro} from '../Data/dataRetro';
import PlantillaRetro from './Plantilla/PlantillaRetro';


const CamisetasRetro = () => {
  return (
    <div>
        <h2>Camisetas Boca</h2>
        <section>
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