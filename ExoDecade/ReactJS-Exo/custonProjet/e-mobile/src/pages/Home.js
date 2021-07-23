import { useState, useCallback, useEffect, Fragment } from "react";
import Header from "./../components/Header/Header";
import TopSellers from "./../containers/HomeProducts/TopSellers/TopSellers";
import TopNews from "./../containers/HomeProducts/TopNews/TopNews";
import MyCarousel from "./../components/Carousel/MyCarousel";
import RecentlyViewed from './../components/RecentlyView/RecentlyView'
import { Route, Switch, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// eslint-disable-next-line
import useHttp from './../hooks/use-http';

import Footer from "./../components/Footer/Footer";

import { categoriesActions } from "./../store/catagoriesStore";
import { basketActions } from "./../store/basketStore";
import routes from "./../Routes/index";

import { useDispatch } from "react-redux";

const Home = () => {
  
  const [error, setError] = useState(null);
  const location = useLocation();
  const recentlyViewProduct = useSelector((state) => state.products.recentlyViewed);
  const dispatch = useDispatch();
  // const updateDategories = (data) => [
  //   dispatch(categoriesActions.initcategories(data))

  // ]

  const initcategorie = useCallback(async () => {
    setError(null);
    try {
      // const result = api({path: '/categories'},updateDategories );
      // console.log('result', result)
      const response = await fetch("http://localhost:3000/categories");
      if (!response.ok) {
        throw new Error("Aucunes catérogies n'ont été traouve");
      }

      const data = await response.json();
      dispatch(categoriesActions.initcategories(data))

    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line
  }, []);

  const initcarts = useCallback(async () => {
    setError(null);
    try {
      // const result = api({path: '/categories'},updateDategories );
      // console.log('result', result)
      const response = await fetch("http://localhost:3000/carts");
      if (!response.ok) {
        throw new Error("Aucun panier n'a été trouvé");
      }

      const data = await response.json();
      dispatch(basketActions.fetchExistingCarts(data))

    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    initcategorie();
    initcarts();
  }, [initcategorie, initcarts]);
  const singlePromo = [
    {
      className: 'promo1',
      label : '30 Days return'
    },
    {
      className: 'promo2',
      label : 'Free shipping'
    },
    {
      className: 'promo3',
      label : 'Secure payments'
    },
    {
      className: 'promo4',
      label : 'New products'
    }
  ]
  return (
    <Fragment>
      <Header />
      <Switch>
        {routes.map((routeItem, index) => {
          return (
            <Route
              key={index}
              exact={routeItem.isExact}
              path={routeItem.path}
              render={ (props) => (
                <routeItem.component {...props} title={routeItem.title} />
              )}
            ></Route>
          );
        })}
      </Switch>
      
      <Route exact={true} path="/">
        <div className="slider-area">
          <MyCarousel />

        </div>
        {error && <p>oups une erreur {error}</p>}
        <div className="container">
          <div className="row mb-3">
            {singlePromo && singlePromo.map( (promo) => {
              return (
                <div key={`${promo.className}-${promo.label}`} className="col-md-3 col-sm-6">
                  <div className={`single-promo ${promo.className}`}>
                    <i className="fa fa-refresh"></i>
                    <p>{promo.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
        <div className="container">
          <TopSellers />
          {console.log('recentlyViewProduct.length', recentlyViewProduct.length)}
          {recentlyViewProduct  && recentlyViewProduct.length !== 0 && <RecentlyViewed max={3} recentlyViewProduct={recentlyViewProduct}/>}
          
          <TopNews />
        </div>
      </Route>
      { (location.pathname !== '/basket') ?
      <Footer />
      : ''
    
      }
    </Fragment>
  );
};

export default Home;
