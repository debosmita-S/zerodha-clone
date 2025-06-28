import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (

      <nav class="navbar navbar-expand-lg border border-grey"
      style={{backgroundColor: "#FFFFFF", height:"70px"}}>
        <div class="container">

          <Link class="navbar-brand" to="/">
            {/* <img src="media/images/zyrodha_logo.png" style={{ width: "12.8%", height: "9%", objectFit: "contain"}}/> */}
            <img src="media/images/logo.svg" style={{ width: "25%"}}/>
          </Link>
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
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/signup"><i class="fa fa-bars" aria-hidden="true"></i></Link>
              </li>
            </ul>
            

          </div>
        </div>
      </nav>
  );
}

export default Navbar;
