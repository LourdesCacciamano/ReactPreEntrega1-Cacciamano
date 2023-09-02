import React from 'react'
import CartWidget from './CartWidget'
import LogoNavBar from "./LogoNavBar"

const NavBar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"> <LogoNavBar/> </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse sections-Padre" id="navbarNav">
                    <ul class="navbar-nav section2">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                      </li>
                    
                    </ul>
                    <li class="nav-item carritoNav carrito">
                        <a class="nav-link " href="#"> <CartWidget/> </a>
                      </li>
                    <ul>

                    </ul>
                  </div>
                </div>
    </nav>
    </div>
  )
}

export default NavBar