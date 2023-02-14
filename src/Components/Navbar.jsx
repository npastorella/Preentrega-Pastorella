import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css"


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
                <a class="nav-link active txtBarra" aria-current="page" href="#">
                  Camisetas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active txtBarra" aria-current="page" href="#">
                  Camisetas Retro
                </a>
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
