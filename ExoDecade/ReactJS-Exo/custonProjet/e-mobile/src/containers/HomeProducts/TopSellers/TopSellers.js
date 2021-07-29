import {useState, useEffect , Fragment} from "react";
import classes from "./TopSellers.module.css";
import { productsActions } from '../../../store/productsStore';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './../../../components/Product/ProductItem';
import api from './../../../api/apiFetch'


const TopSellers = () => {
  const [errorTopSellers, setErrorTopSellers] = useState(null);
  const dispatch = useDispatch();
  const initTopSellers = async () => {
    setErrorTopSellers(null);
    const responseTopSellers = await api({path: '/top-sellers-products'} )
    
    if (responseTopSellers.apiError) {
      setErrorTopSellers(responseTopSellers.apiError);
    }
    dispatch(productsActions.initTopSellers(responseTopSellers));
    
  };
  useEffect(() => {
    initTopSellers();
    // eslint-disable-next-line
  }, []);

  const topSellersProduct = useSelector(state => state.products.topSellers);
  return (
    <Fragment>
      <div className={`${classes.topSellers} single-product-widget single-sidebar`}>
        <h2 className="sidebar-title">Top sellers</h2>
        {topSellersProduct && topSellersProduct.map( topSeller => {
          return (
            <ProductItem  key={Math.random()} customKey='topSeller-' product={topSeller} />
          ) 

        })}
        {errorTopSellers &&  <p>{ errorTopSellers}</p>}
      </div>
    </Fragment>
  );
};

export default TopSellers;