import classes from "./Header.module.css";
import img from "./../../img/logo.png";
import {NavLink } from 'react-router-dom';
import NavBar from "./NavBar";

const Header = () => {
  
  return (
    <header className={classes.header}>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo">
                <h1>
                  <NavLink to="/">
                    <img src={img} alt="logo Shop mobile" />
                  </NavLink>
                </h1>
              </div>
            </div>
            <div className="col-sm-4">
              <input type="text" placeholder="Search products..." />
              <input type="button" value="Search" />
            </div>

            <div className="col-sm-4">
              <div className="shopping-item">
                <NavLink to="/Basket">
                  Cart : <span className="cart-amunt">100.58 €</span>{" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="product-count">5</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="navbar">
                  <NavBar customClass={"nav navbar-nav navbar-expand"} />
              </div>  
          </div>
      </div>
      
    </header>
  );
};

export default Header;
