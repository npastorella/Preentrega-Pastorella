import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camisetas from "./components/pages/Camisetas";
import CamisetasRetro from "./components/pages/CamisetasRetro";
import NavBarExamples from "./components/Navbar/Navbara";
import { Navbar } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <NavBarExamples />
      <Landing/>
      <Routes>
      <Route >            
            <Route path='camisetas' element={<Camisetas />} />
            <Route path='camisetasretro' element={<CamisetasRetro />} />
      </Route>
{/*         <Route exact path="/" element={<Landing />}>
          <Route path="Camisetas" element={<Camisetas/>}/>
          <Route path="CamisetasRetro" element={<CamisetasRetro/>}/>

        </Route> */}



        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
