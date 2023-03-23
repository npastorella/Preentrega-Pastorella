import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camisetas from "./components/pages/Camisetas";
import CamisetasRetro from "./components/pages/CamisetasRetro";
import NavBarExamples from "./components/Navbar/Navbara";
import CartProvider from "./components/Context/CartContext";
import ItemDetail from "./components/ItemDetail/ItemDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  
    <React.StrictMode>
      <CartProvider>
        <BrowserRouter>          
          <NavBarExamples />
          <Landing/>
            <Routes>
              <Route>                   
                    <Route exact path='camisetas' element={<Camisetas />} />
                    <Route exact path='camisetasretro' element={<CamisetasRetro />} />
                    <Route exact path='/item/:camId' element={<ItemDetail />} />
              </Route>        
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </React.StrictMode>
  
);
