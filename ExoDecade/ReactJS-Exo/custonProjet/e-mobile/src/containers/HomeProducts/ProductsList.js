import { Fragment, useState, useCallback, useEffect } from "react";
import { productsActions } from "./../../store/productsStore";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";
const ProductsList = (props) => {
  const [error, setError] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const initProduct = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/products-lists/" + params.productListId);
      if (!response.ok) {
        throw new Error("Aucunes catérogies n'ont été traouve");
      }

      const data = await response.json();
      console.log('dataProductsList', data.items)
      dispatch(productsActions.initProductsList(data.items));
    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    initProduct();
  }, [initProduct]);
  const myProductsList =  useSelector(state => state.products.productsList);
  return (
    <Fragment>
      <section className="container">
        <h2>Liste : {params.productListId}</h2>

        {myProductsList && myProductsList.map(topNew => {
          return (
          <div key={topNew.id} className="single-wid-product">
            <a href="single-product.html">
              <img src={ topNew.imageName } alt="" className="product-thumb" />
            </a>
            <h2>
              <a href="single-product.html">{topNew.name}</a>
            </h2>
            <div className="product-wid-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          <div className="product-wid-price">
            <ins>${topNew.price - ((topNew.price * topNew.discountRate) / 100)}</ins>
            <del>${topNew.price}</del>
          </div>
        </div>) 

        })}
        {error && <p>{error}</p>}

        <NavLink to="/">Retour</NavLink>
      </section>
    </Fragment>
  );
};
export default ProductsList;
