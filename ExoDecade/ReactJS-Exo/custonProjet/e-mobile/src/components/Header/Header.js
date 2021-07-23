import classes from "./Header.module.css";
import img from "./../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import utils from "../../utils";

const Header = () => {
  const location = useLocation();
  const total = useSelector(state=> state.basket.total)
  const nbProduct = useSelector(state=> state.basket.products.length)
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
              <NavLink to="/basket">
                <div className="shopping-item">
                  Cart : <span className="cart-amunt">{utils.fix2(total)} $</span>{" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="product-count">{nbProduct}</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {location.pathname !== "/basket" ? (
        <div className="container">
          <div className="row">
            <div className="navbar">
              <NavBar customClass={"nav navbar-nav navbar-expand"} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
