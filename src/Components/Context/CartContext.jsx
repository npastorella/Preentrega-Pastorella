import React, { useState, createContext } from "react";


export const CartContext = createContext({
  cart: [],
  clearCart: () => {},
  isInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {}
});

// CartProvider: provee el contexto, almacena estado de carrito y proporciona funciones

const CartProvider = (props) => {

  // Estado del carrito de compras.
  const [cart, setCart] = useState([]);

  // Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }

  // Verificar si un producto ya está en el carrito.
  const isInCart = (id) => {
    return cart.find((camiseta) => camiseta.id === id) ? true : false;
  }

  // Agregar un producto al carrito.
  const addToCart = (camiseta, quantity) => {   
    if (isInCart(camiseta.id)) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === camiseta.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      }));
    } else {
      setCart([...cart, { ...camiseta, quantity }]);
    }
  };
  
  // Eliminar un producto del carrito.
  const removeFromCart = (id) => {
    const newCart = cart.filter((camiseta) => camiseta.id !== id)
    setCart(newCart);
  };

  // Obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    let cant = 0
    cart.forEach((e) => cant += e.quantity)
    return cant
  };

  // Obtener el total del carrito en función de la cantidad y el precio de cada producto
  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.precio))
    return total        
  };

  return (
    //  Por último utilamos el Context de React para proveer el estado del carrito y las funciones que lo manipulan a cualquier componente que se suscriba a este contexto. 
   
   // CartContext.Provider es un objeto que contiene los valores que se van a compartir con los componentes que se suscriban a este contexto.
    <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, getTotalQuantity, getTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;