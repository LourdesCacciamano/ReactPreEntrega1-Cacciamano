import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Components/imagenes/logo.jpeg";





const Footer = () => {
  return (
    <div className="container">
    <footer className="py-3 my-4 footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <h3 className=' px-2 text-body-secondary info'>FlowersNatural7@gmail.com || </h3>
        <h3 className=' px-2 text-body-secondary info'>3517785410 || </h3>
        <h3 className=' px-2 text-body-secondary info'>Barrio Jardin, 5200, Cordoba, Argentina || </h3>
        </ul>
        <div className='pAndImg'>
            <p className="text-center text-body-secondary">&copy; 2023 Company, Flower´s</p>
            <Link to={"/"}><img src={logo} alt='logo' className='logoFooter' /></Link> 
        </div>
    </footer>
    </div>
  )
}

export default Footer