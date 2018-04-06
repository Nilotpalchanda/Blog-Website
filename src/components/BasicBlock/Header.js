import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Start Bootstrap</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact activeStyle={{color: 'white'}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeStyle={{color: 'white'}} >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" activeStyle={{color: 'white'}} >Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeStyle={{color: 'white'}} >Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" activeStyle={{color: 'white'}} >Shop</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

	);

export default Header