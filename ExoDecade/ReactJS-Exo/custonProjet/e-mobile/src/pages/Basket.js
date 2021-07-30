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
          {myProducts && myProducts.length !== 0 && (
            <section className="d-flex flex-wrap align-items-center justify-content-around single-product-area container-100">
              {myProducts &&
                myProducts.map((product) => {
                  return (
                    <ProductItem
                      customClass="single-shop-product custom-style-basket"
                      key={Math.random()}
                      customKey="product-list-"
                      product={product}
                      clearable={true}
                    />
                  );
                })}
            </section>
          )}
        </div>
        {myProducts && myProducts.length === 0 && <div className="row d-flex justify-content-around">Aucun produit pour le moment</div>}
        <div className="row">
          <NavLink to="/">
            <input type="button" value="Retour" />
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
export default Basket;
