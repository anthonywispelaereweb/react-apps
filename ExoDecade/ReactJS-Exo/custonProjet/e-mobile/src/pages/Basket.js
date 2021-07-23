import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "./../components/Product/ProductItem";

const Basket = () => {
  const myProducts = useSelector((state) => state.basket.products);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h3>Mon panier</h3>
          <section className="d-flex flex-wrap align-items-center justify-content-around single-product-area container-100">
            {myProducts &&
              myProducts.map((product) => {
                return (
                  <ProductItem
                    customClass="single-shop-product custom-style-basket"
                    key={Math.random()}
                    customKey="product-list-"
                    product={product}
                  />
                );
              })}
          </section>
          <div>
            <NavLink to="/">Retour</NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Basket;
