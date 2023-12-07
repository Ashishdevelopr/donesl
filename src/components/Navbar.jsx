import React from 'react'
import "./Navbar.css"
import University_logo from "../assets/fdbp_logo.png"
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
    
    <div className='navbar-start bg-dark'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg">
          <a href="/">
          <img src={University_logo} alt="University_Logo" className="d-inline-block align-text-top university-logo img-fluid"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav-section" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active button-primary" >All courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active button-primary" >Events and Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active button-primary" >Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active button-primary"><i class="fa-solid fa-magnifying-glass"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active"><button className='btn button-login'>Login/Signup</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active button-primary"><i class="fa-solid fa-cart-shopping"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
    </>
  )
}

export default Navbar