import { useState, useCallback, useEffect, Fragment } from "react";
import Header from "./../components/Header/Header";
import TopSellers from "./../containers/HomeProducts/TopSellers/TopSellers";
import TopNews from "./../containers/HomeProducts/TopNews/TopNews";
import MyCarousel from "./../components/Carousel/MyCarousel";
import { Route, Switch } from "react-router-dom";
// eslint-disable-next-line
import ProductsList from "./../containers/HomeProducts/ProductsList";

import Footer from "./../components/Footer/Footer";

import { categoriesActions } from "./../store/catagoriesStore";
import routes from "./../Routes/index";

import { useDispatch } from "react-redux";

const Home = () => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const initcategorie = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/categories");
      if (!response.ok) {
        throw new Error("Aucunes catérogies n'ont été traouve");
      }

      const data = await response.json();

      dispatch(categoriesActions.initcategories(data));
    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    initcategorie();
  }, [initcategorie]);

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
			<TopSellers />
			<TopNews />
		</div>
      </Route>

      <Footer />
    </Fragment>
  );
};

export default Home;
