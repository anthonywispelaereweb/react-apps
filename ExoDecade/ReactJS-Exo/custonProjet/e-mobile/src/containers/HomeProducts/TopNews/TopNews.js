import { useState, useEffect, Fragment } from "react";
import classes from "./TopNews.module.css";
import { productsActions } from "../../../store/productsStore";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./../../../components/Product/ProductItem";
import api from './../../../api/apiFetch'

const TopNews = () => {
  const [errorTopNews, setErrorTopNews] = useState(null);
  const dispatch = useDispatch();
  const initTopNews = async () => {
    setErrorTopNews(null);
    const responseTopNew = await api({path: '/top-new-products'} );
    // const response = await fetch("http://localhost:3000/top-new-products");
    if (responseTopNew.apiError) {
      setErrorTopNews(responseTopNew.apiError);
    }

    dispatch(productsActions.initTopNews(responseTopNew));
    
  }
  useEffect(() => {
    initTopNews();
    // eslint-disable-next-line
  }, []);

  const topNewsProduct = useSelector((state) => state.products.topNews);
  return (
    <Fragment>
      <div
        className={`${classes.topNews} single-product-widget single-sidebar`}
      >
        <h2 className="sidebar-title">Top New</h2>
        {topNewsProduct &&
          topNewsProduct.map((topNew) => {
            return (
              <ProductItem
                key={Math.random()}
                customKey="topNew-"
                product={topNew}
                customClass="single-wid-product"
              />
            );
          })}
        {errorTopNews && <p>{errorTopNews}</p>}
      </div>
    </Fragment>
  );
};

export default TopNews;
