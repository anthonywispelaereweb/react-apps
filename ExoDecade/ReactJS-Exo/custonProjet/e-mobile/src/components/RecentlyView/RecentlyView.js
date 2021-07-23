import { Fragment } from "react";
import classes from "./RecentlyView.module.css";
// import { useSelector } from "react-redux";
import ProductItem from "./../Product/ProductItem";
const RecentlyViewed = (props) => {
  
  return (
    <Fragment>
      <div className={`${classes.recentView} ${props.customClass ?props.customClass : '' }  single-product-widget single-sidebar`}>
        <h2 className={`sidebar-title`}> Recently Viewed</h2>
        {props.recentlyViewProduct &&
          props.recentlyViewProduct.map((recentView, index) => {
			  if (index < props.max) {
				  return (
					<ProductItem
					  key={Math.random()}
					  customKey="topNew-"
					  product={recentView}
					  customClass=""
					/>
				  );

			  }
			  return false;
          })}
      </div>
    </Fragment>
  );
};

export default RecentlyViewed;
