import React from "react";
import carrito from "../imagenes/carritoB.png";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div className="divCarrito">
      <img className="carrito" src={carrito} alt="Carrito de compras" />
      <p className="txtCent">5</p>
    </div>
  );
};

export default CartWidget;
