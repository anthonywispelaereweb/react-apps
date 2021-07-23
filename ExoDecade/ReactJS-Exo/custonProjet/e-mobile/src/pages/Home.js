import { Fragment } from "react";
// import Header from "./../components/Header/Header";
import TopSellers from "./../containers/HomeProducts/TopSellers/TopSellers";
import TopNews from "./../containers/HomeProducts/TopNews/TopNews";
import MyCarousel from "./../components/Carousel/MyCarousel";
import RecentlyViewed from "./../components/RecentlyView/RecentlyView";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  // const location = useLocation();
  const recentlyViewProduct = useSelector(
    (state) => state.products.recentlyViewed
  );
  

  const singlePromo = [
    {
      className: "promo1",
      label: "30 Days return",
    },
    {
      className: "promo2",
      label: "Free shipping",
    },
    {
      className: "promo3",
      label: "Secure payments",
    },
    {
      className: "promo4",
      label: "New products",
    },
  ];
  return (
    <Fragment>
      <div className="slider-area">
        <MyCarousel />
      </div>
      <div className="container">
        <div className="row mb-3">
          {singlePromo &&
            singlePromo.map((promo) => {
              return (
                <div
                  key={`${promo.className}-${promo.label}`}
                  className="col-md-3 col-sm-6"
                >
                  <div className={`single-promo ${promo.className}`}>
                    <i className="fa fa-refresh"></i>
                    <p>{promo.label}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container">
        <TopSellers />
        {/* {console.log('recentlyViewProduct.length', recentlyViewProduct.length)} */}
        {recentlyViewProduct && recentlyViewProduct.length !== 0 && (
          <RecentlyViewed
            max={3}
            recentlyViewProduct={recentlyViewProduct}
            customClass="resize3"
          />
        )}

        <TopNews />
      </div>
    </Fragment>
  );
};

export default Home;
