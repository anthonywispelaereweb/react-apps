import {useState, useCallback, useEffect , Fragment} from "react";
import classes from "./TopNews.module.css";
import { productsActions } from '../../../store/productsStore';
import { useDispatch, useSelector } from 'react-redux';

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
  const pathImg = '/../img/'
  return (
    <Fragment>
      <div className={classes.topNews}>
        <h2 >Top New</h2>
        {topNewsProduct && topNewsProduct.map(topNew => {
          const imgPath = pathImg + topNew.imageName;
          console.log( 'uri ', imgPath)
          return (
          <div key={topNew.id} className="single-wid-product">
            <a href="single-product.html">
              <img src={imgPath} alt="" className="product-thumb" />
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
        {errorTopNews &&  <p>{ errorTopNews}</p>}
        
      </div>
    </Fragment>
  );
};

export default TopNews;