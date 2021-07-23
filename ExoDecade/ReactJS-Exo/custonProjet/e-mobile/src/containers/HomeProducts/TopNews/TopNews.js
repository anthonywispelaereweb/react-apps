import {useState, useCallback, useEffect , Fragment} from "react";
import classes from "./TopNews.module.css";
import { productsActions } from '../../../store/productsStore';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './../../../components/Product/ProductItem';

const TopNews = () => {
  const [errorTopNews, setErrorTopNews] = useState(null);
  const dispatch = useDispatch();
  const initTopNews = useCallback(async () => {
    setErrorTopNews(null);

    try {
      const response = await fetch('http://localhost:3000/top-new-products');
      if (!response.ok) {
        throw new Error('Aucun Top-News trouvé');
      }
      const dataProduct = await response.json();
      
      dispatch(productsActions.initTopNews(dataProduct));
    } catch (error) {
      setErrorTopNews(error.message);
    }// eslint-disable-next-line
  },[]);
  useEffect(() => {
    initTopNews();
  }, [initTopNews]);

  const topNewsProduct = useSelector(state => state.products.topNews);
  return (
    <Fragment>
      <div className={`${classes.topNews} single-product-widget single-sidebar`}>
        <h2 className="sidebar-title">Top New</h2>
        {topNewsProduct && topNewsProduct.map(topNew => {
          return (
            <ProductItem key={Math.random()} customKey='topNew-' product={topNew} customClass="single-shop-product"/>
         )})
        }
        {errorTopNews &&  <p>{ errorTopNews}</p>}
        
      </div>
    </Fragment>
  );
};

export default TopNews;