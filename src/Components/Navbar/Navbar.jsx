import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary barra">
        <div class="container-fluid">
          <a class="navbar-brand txtBarra" href="#">
            Boca Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active txtBarra" aria-current="page" to ={'/'}>Inicio</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active txtBarra" aria-current="page" to ={"CamisetasRetro"}>Camisetas Retro</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active txtBarra" aria-current="page" href="#">
                  Camperas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active txtBarra" aria-current="page" href="#">
                  Pantalones Largos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active txtBarra" aria-current="page" href="#">
                  Pantalones Cortos
                </a>
              </li>
            </ul>
            <CartWidget/>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
