import { Fragment, useState, useCallback, useEffect } from "react";
import { productsActions } from "./../../store/productsStore";
// import { categoriesActions } from "./../../store/catagoriesStore";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./../../components/Product/ProductItem";
import "./ProductsList.css";
const ProductsList = (props) => {
  const [error, setError] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const initProduct = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/products-lists/" + params.productListId
      );
      if (!response.ok) {
        throw new Error("Aucunes catérogies n'ont été traouve");
      }

      const data = await response.json();
      // console.log('dataProductsList', data.name)
      // console.log('dataProductsList', data.items)
      dispatch(productsActions.initProductsList(data.items));
      // dispatch(categoriesActions.setSelectedCategorie(data.name));
    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line
  }, [params]);

  useEffect(() => {
    initProduct();
  }, [initProduct]);
  const myProductsList = useSelector((state) => state.products.productsList);
  const categoriesName = useSelector(
    (state) => state.categories.selectedCategorie
  );
  
  return (
    <Fragment>
      <section className="container">
        {/* <h2>Liste : {params.productListId} categoriesName :  {categoriesName}</h2> */}
        <div className="product-big-title-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-bit-title text-center">
                  <h2> {categoriesName} </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="d-flex flex-wrap align-items-center justify-content-around single-product-area">
          {myProductsList &&
            myProductsList.map((product) => {
              return (
                <ProductItem
                  customClass="single-shop-product custom-style-shop"
                  key={Math.random()}
                  categories={categoriesName}
                  customKey="product-list-"
                  product={product}
                />
              );
            })}
        </section>
        {error && <p>{error}</p>}

        <NavLink to="/">Retour</NavLink>
      </section>
    </Fragment>
  );
};
export default ProductsList;
