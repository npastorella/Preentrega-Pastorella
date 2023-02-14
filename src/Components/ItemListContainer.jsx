import React from 'react'
import "./itemListConteiner.css";
import escudo from "../imagenes/escudo-BJ.png"

const itemListContainer = (props) => {
  return (
    <div className='banner'>
        <img className='escudo' src={escudo} alt="Escudo Boca Juniors" />
        <div className='txtGreeting'> 
            {props.greeting}     
        </div>
    </div>
  )
}

export default itemListContainer