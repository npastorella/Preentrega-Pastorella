import React, {useState , useEffect} from 'react';
import "./ItemListConteiner.css";
import escudo from "../../imagenes/escudo-BJ.png";
import camisetas from "/data/dataCamisetas.js";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';





const ItemListContainer = (props) => {

  const [arrayList, setArrayList] = useState([null]);

  const getList =() =>{
    return new Promise ((resolve, reject) =>{
      setTimeout (() => {
        resolve (camisetas)
      }, 1500);
    })
  }

  useEffect (() => {
    getList()
      .then((response) => setArrayList(response))
      .catch (() => console.log("no se pudieron cargar los archivos"))
      .finally()
  }, [])


  console.log (arrayList);


  return ( 
    
    <div>
        <div className='banner'>
            <img className='escudo' src={escudo} alt="Escudo Boca Juniors" />
            <div className='txtGreeting'> 
                {props.greeting}     
            </div>          
        </div>
    </div>   
  )

  }
export default ItemListContainer;