import React from 'react'
import CartWidget from './CartWidget'
import LogoNavBar from "./LogoNavBar"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <Link class="navbar-brand" to="/inicio"> <LogoNavBar/> </Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse sections-Padre" id="navbarNav">
                    <ul class="navbar-nav section2">
                      <li class="nav-item">
                        <Link class="nav-link active home" aria-current="page" to="/inicio">Inicio |</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/rosas">Rosas</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/alstroemeria">Alstroemerias</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/gerberas">Gerberas</Link>
                      </li>
                    </ul>
                    <li class="nav-item carritoNav carrito">
                        <Link class="nav-link " to="/carrito"> <CartWidget/> </Link>
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