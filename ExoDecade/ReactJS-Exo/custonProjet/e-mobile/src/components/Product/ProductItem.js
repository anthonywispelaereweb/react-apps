import React, { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import StarRating from "components/StarRating/StarRating";
import { useDispatch } from "react-redux";
import { basketActions } from "store/basketStore";
// import { useSelector  } from "react-redux";
import utils from "utils";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const currentQt = useRef(props.product.qty)
  const dispatch = useDispatch();
  const constUrl = require(`assets/images/${props.product.imageName}`).default;
  const clearHandler = (event) => {
    dispatch(basketActions.removeProduct({id : props.product.id}))

  }
  return (
    <Fragment>
      <div
        key={props.customKey + Math.random()}
        className={`${
          props.customClass ? props.customClass : "single-wid-product"
        } ${props.clearable ? classes.clearRelative : ""}`}
      >
        {props.clearable && (
          <i
            className={`fas fa-trash ${classes.clearCtnButton}`}
            aria-hidden="true"
            onClick={clearHandler}
          ></i>
        )}

        <NavLink to={`/products/${props.product.id}`}>
          <img src={constUrl} alt="" className="product-thumb" />

          <h2>{utils.firstCapital(props.product.name)}</h2>
          <div className="product-wid-rating">
            <i className="fas fa-star"></i>
            {props.product.review}
            {<StarRating value={props.product.review} />}
          </div>
          <div className="product-wid-price">
            <ins>
              $
              {utils.fix2(
                props.product.price -
                  (props.product.price * props.product.discountRate) / 100
              )}
            </ins>
            <del>${utils.fix2(props.product.price)}</del>
          </div>
          {props.clearable && (
          <input type="number" value={currentQt.current} disabled/>
        )}
        </NavLink>
      </div>
    </Fragment>
  );
};
export default ProductItem;
