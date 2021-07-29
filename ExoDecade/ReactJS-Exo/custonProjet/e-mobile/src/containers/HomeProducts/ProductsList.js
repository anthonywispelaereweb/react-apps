import { Fragment, useState, useEffect } from "react";
import { productsActions } from "store/productsStore";
import { categoriesActions } from "store/catagoriesStore";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "components/Product/ProductItem";
import "./ProductsList.css";
import api from 'api/apiFetch';
const ProductsList = (props) => {
  const [error, setError] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const initProduct = async () => {
      const pathUrl = `/products-lists/${params.productListId}`
      const response = await api({path:pathUrl})
      
      if (response.apiError) {
        setError(response.apiError);
        return;
      }
      console.log('response', response)
      response && dispatch(productsActions.initProductsList(response));
      response && dispatch(categoriesActions.setSelectedCategorie(response.name));

  };

  useEffect(() => {
    initProduct();
     // eslint-disable-next-line
  }, []);
  const myProductsList = useSelector((state) => state.products.productsList.items);
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
