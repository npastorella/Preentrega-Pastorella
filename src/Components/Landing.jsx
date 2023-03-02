import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Carrusel from "./Carrusel/Carrusel";
import Camisetas from "./pages/Camisetas";
// import CamisetasRetro from "./pages/CamisetasRetro";

const Landing = () => {
  return (    
    <div>      
      <Carrusel/>
      <ItemListContainer greeting="Bienvenidos al Sitio Oficial de Indumentaria de Boca Juniors"/>
  {/*     <Camisetas/> */}
    </div>    
  );
};

export default Landing;
