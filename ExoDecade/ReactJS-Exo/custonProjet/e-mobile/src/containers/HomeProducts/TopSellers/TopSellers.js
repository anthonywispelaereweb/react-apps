import {useState, useCallback, useEffect , Fragment} from "react";
import classes from "./TopSellers.module.css";
import { productsActions } from '../../../store/productsStore';
import { useDispatch, useSelector } from 'react-redux';

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
      console.log('dataProduct :', dataProduct)
      dispatch(productsActions.initTopSellers(dataProduct));
    } catch (error) {
      setErrorTopSellers(error.message);
    }// eslint-disable-next-line
  },[]);
  useEffect(() => {
    initTopSellers();
  }, [initTopSellers]);

  const topSellersProduct = useSelector(state => state.products.topSellers);
  const pathImg = './../img/';
  return (
    <Fragment>
      <div className={classes.topSellers}>
        <h2 >Top sellers</h2>
        {topSellersProduct && topSellersProduct.map(topNew => {
          return (
          <div key={topNew.id} className="single-wid-product">
            <a href="single-product.html">
              <img src={pathImg + topNew.imageName } alt="" className="product-thumb" />
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
        {errorTopSellers &&  <p>{ errorTopSellers}</p>}
      </div>
    </Fragment>
  );
};

export default TopSellers;