import React from 'react';
import carrusel from "../../imagenes/banner/banner1.png";
import "./Carrusel.css";

const Carrusel = () => {
  return (
    <>
        <img className='imgCarrusel' src= {carrusel} alt="Aca iria el carrusel de la pagina BocaShop" />
    </>
  )
}

export default Carrusel