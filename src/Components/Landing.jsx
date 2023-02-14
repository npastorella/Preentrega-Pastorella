import React from "react";
import Navbar from "./Navbar";
import ItemListContainer from "./ItemListContainer";
import Carrusel from "./Carrusel";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos al Sitio Oficial de Indumentaria de Boca Juniors"/>
      <Carrusel/>
    </div>
  );
};

export default Landing;
