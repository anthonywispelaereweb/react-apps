import { Fragment, useState, useEffect, useRef } from "react";
import { productsActions } from "store/productsStore";
import { basketActions } from "store/basketStore";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RecentlyViewed from "components/RecentlyView/RecentlyView";
import utils from 'utils';
import StarRating from "components/StarRating/StarRating";
import api from "api/apiFetch";
const ProductDetails = (props) => {
  const [error, setError] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const quantityRef = useRef(1);
  const [quantity, setQuantity] = useState(1);

  const currentProduct = async () => {
    const pathUrl = `/products/${params.idProduct}`
    const resultProduct = await api({ path: pathUrl });
    console.log("resultProduct", resultProduct);
    if (resultProduct.apiError) {
      setError(resultProduct.apiError);
      return;
    }
    resultProduct && dispatch(productsActions.setSelectedProduct(resultProduct))
    resultProduct &&  dispatch(productsActions.addRecentlyViewed(resultProduct))
  };
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

    dispatch(basketActions.addProduct({product,quantity}));
    setQuantity(1);

  };
  const recentlyViewProduct = useSelector((state) => state.products.recentlyViewed);

  return (
    <Fragment>
      <section className="container">
        {error && <p>{error}</p>}
        <NavLink to="/">Retour</NavLink>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {recentlyViewProduct  && recentlyViewProduct.length !== 0 && <RecentlyViewed max={3} recentlyViewProduct={recentlyViewProduct} customClass={'full'} />}
          
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
                    {utils.firstCapital(product.name)}
                  </NavLink>
                )}
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      {product && 
                      <img src={require(`./../../assets/images/${product.imageName}`).default} alt="" />}
                      
                      
                    </div>

                    <div className="product-gallery">
                    {product && <p><img src={require(`./../../assets/images/${product.imageName}`).default} alt="" />
                      <img src={require(`./../../assets/images/${product.imageName}`).default} alt="" />
                      <img src={require(`./../../assets/images/${product.imageName}`).default} alt="" />
                      </p>}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="product-inner">
                    <h2 className="product-name">{product && utils.firstCapital(product.name)}</h2>
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
