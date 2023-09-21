import React from 'react'
import logo from "./imagenes/logo.jpeg"
const LogoNavBar = () => {
    const stylelogo = {
        width:"100px",
        height:"80px",
        borderRadius:"20px",
        marginTop: "10px",
        marginLeft: "10px"
    }
  return (
    <div>
        <img style={stylelogo} src={logo} alt="logo NavBar"/>
    </div>
  )
}

export default LogoNavBar