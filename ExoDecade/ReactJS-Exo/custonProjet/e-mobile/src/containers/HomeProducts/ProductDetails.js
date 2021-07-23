import { Fragment, useState, useCallback, useEffect, useRef } from "react";
import { productsActions } from "./../../store/productsStore";
import { basketActions } from "./../../store/basketStore";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import utils from './../../utils';
import StarRating from "./../../components/StarRating/StarRating";
const ProductDetails = (props) => {
  const [error, setError] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const quantityRef = useRef(1);
  const [quantity, setQuantity] = useState(1);

  const currentProduct = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/products/" + params.idProduct
      );
      if (!response.ok) {
        throw new Error("Aucunes détail de produit n'a été trouve");
      }

      const data = await response.json();
      console.log("detéails Product", data);
      dispatch(productsActions.setSelectedProduct(data));
      dispatch(productsActions.addRecentlyViewed(data));

    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    currentProduct();
    // eslint-disable-next-line
  }, []);

  const product = useSelector((state) => state.products.selectedProduct);
  const categoriesName =
    useSelector((state) => state.categories.selectedCategorie) ||
    localStorage.getItem("currentCategoriesName");
  const finalPrice = product && utils.discountRacePrice(product, quantity);
  const finalPriceDiscountRateLess =
    product && Number(product.price) * Number(quantity);
  const setQuantityHandler = (event) => {
    setQuantity(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = quantityRef.current.value;
    if (enteredValue === "0") {
      return;
    }

    console.log("product", product);
    console.log("quantity", quantity);
    dispatch(basketActions.addProduct({product,quantity}));
    setQuantity(1);

  };
  return (
    <Fragment>
      <section className="container">
        {error && <p>{error}</p>}
        <NavLink to="/">Retour</NavLink>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-sidebar">
              <h2 className="sidebar-title">Recently Viewed</h2>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="/">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>700.00 € </ins> <del>100.00 €</del>
                </div>
              </div>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="/">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div>
              </div>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="/">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div>
              </div>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="/">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div>
              </div>
            </div>

            <div className="single-sidebar">
              <h2 className="sidebar-title">Others brands</h2>
              <ul>
                <li>
                  <a href="/">Sony</a>
                </li>
                <li>
                  <a href="/">Samsung</a>
                </li>
                <li>
                  <a href="/">LG</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="product-content-right">
              <div className="product-breadcroumb">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">{categoriesName}</NavLink>
                {product && (
                  <NavLink to={`/product/${product.id}`}>
                    {product.name}
                  </NavLink>
                )}
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      <img src="img/product-2.jpg" alt="" />
                    </div>

                    <div className="product-gallery">
                      <img src="img/product-thumb-1.jpg" alt="" />
                      <img src="img/product-thumb-2.jpg" alt="" />
                      <img src="img/product-thumb-3.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="product-inner">
                    <h2 className="product-name">{product && product.name}</h2>
                    <div className="product-inner-price">
                      <ins>${product && utils.fix2(finalPrice)}</ins>
                      <del>${product && finalPriceDiscountRateLess}</del>
                    </div>
                    <div className="product-wid-rating">
                      {product && <StarRating value={product.review} />}
                    </div>

                    <form
                      action=""
                      className="cart"
                      onSubmit={formSubmitHandler}
                    >
                      <div className="quantity">
                        <input
                          type="number"
                          size="4"
                          className="input-text qty text"
                          title="Qty"
                          value={quantity}
                          name="quantity"
                          onChange={setQuantityHandler}
                          ref={quantityRef}
                          min="1"
                          step="1"
                        />
                      </div>
                      <button className="add_to_cart_button" type="submit">
                        Add to cart
                      </button>
                    </form>

                    <div className="product-inner-category">
                      <h2>Product Description</h2>
                      <p>{product && product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductDetails;
