import {useState, useCallback, useEffect , Fragment} from "react";
import classes from "./TopSellers.module.css";
import { productsActions } from '../../../store/productsStore';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './../../../components/Product/ProductItem';


const TopSellers = () => {
  const [errorTopSellers, setErrorTopSellers] = useState(null);
  const dispatch = useDispatch();
  const initTopSellers = useCallback(async () => {
    setErrorTopSellers(null);

    try {
      const response = await fetch('http://localhost:3000/top-sellers-products');
      if (!response.ok) {
        throw new Error('Aucun top-sellers trouvé');
      }

      const dataProduct = await response.json();
      dispatch(productsActions.initTopSellers(dataProduct));
    } catch (error) {
      setErrorTopSellers(error.message);
    }// eslint-disable-next-line
  },[]);
  useEffect(() => {
    initTopSellers();
  }, [initTopSellers]);

  const topSellersProduct = useSelector(state => state.products.topSellers);
  return (
    <Fragment>
      <div className={classes.topSellers}>
        <h2 >Top sellers</h2>
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