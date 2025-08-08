import React from 'react'

function NavHeader() {
  return (
    <div className="nav-header">
    <div className="navbar">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <button
          className="btn fs-4 d-lg-none d-flex"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        </div>
        <ul className="navbar-nav d-lg-flex d-none flex-row gap-xl-5 gap-4 justify-content-center">
          <li><a href="!#" className="nav-link">Products</a></li>
          <li><a href="!#" className="nav-link">Who we are</a></li>
          <li><a href="!#" className="nav-link">Concept Store</a></li>
          </ul>
          <img src="./img/logo.png" alt=""/>
        <ul className="navbar-nav d-lg-flex d-none flex-row gap-xl-5 gap-4 justify-content-center">
          
          <li><a href="!#" className="nav-link">Recipes</a></li>
          <li><a href="!#" className="nav-link">Log In</a></li>
          <li><a href="!#" className="nav-link">Cart (0)</a></li>
        </ul>
        
        <div
          className="offcanvas offcanvas-end "
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <img src="./img/logo.png" alt=""/>
            <ul className="navbar-nav">
              <li><a href="!#" className="nav-link">Products</a></li>
              <li><a href="!#" className="nav-link">Who we are</a></li>
              <li><a href="!#" className="nav-link">Concept Store</a></li>
              <li><a href="!#" className="nav-link">Recipes</a></li>
              <li><a href="!#" className="nav-link">Log In</a></li>
              <li><a href="!#" className="nav-link">Cart (0)</a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    <div className="header">
      <div className="container">
        <div className=" div">
         <h1 className="display-1  fw-normal text-center h11">Taste
          the
          Wild.</h1>
          <h1 className="display-1 fw-normal text-center">Find
            your
            Soul.</h1>
         
        </div >
  
      </div>
    </div>
  </div>
  )
}

export default NavHeader
