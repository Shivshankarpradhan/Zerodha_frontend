import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff"}}>
      <div class="container p-2">
        <Link class="navbar-brand" to={"/"}>
          <img src="models/images/logo.svg" style={{width:"22%" , marginLeft:"20%"}} />
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
        
          <form class="d-flex" role="search">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
              <Link class="nav-link active" aria-current="page" to={"/login"}>
                Login
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to={"/signup"}>
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/About"}>
                about
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/Products"}>
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/Pricing"}>
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/support"}>
                Support
              </Link>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
