import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import StarRating from './../../components/StarRating/StarRating'
// import { useSelector  } from "react-redux";
import utils from './../../utils';


const ProductItem = (props) => {
  // const categoriesName =  useSelector(state => state.categories.selectedCategorie) || localStorage.getItem('currentCategoriesName');
  // const loadImage = imageName => {
  //   // import(`./../../assets/${categoriesName}/${imageName}`).then(image => {
  //     import(`./../../assets/images/${imageName}`).then(image => {
  //     // console.log('image', image)
  //     return image;
  //   });
  // };
  const constUrl = require(`./../../assets/images/${props.product.imageName}`).default;
  return (
    <Fragment>
      <div
        key={props.customKey + Math.random()}
        className={props.customClass ? props.customClass : "single-wid-product"}
      >
        <NavLink to={`/products/${props.product.id}`}>
          <p>url : {props.product.imageName}</p>
          <p>categorie : {props.product.categorie}</p>
        
          {/* <img src={loadImage(props.product.imageName)} alt="" className="product-thumb" /> */}
          <img
            src={constUrl}
            alt=""
            className="product-thumb"
          />
        
          <h2>
            {props.product.name}
          </h2>
          <div className="product-wid-rating">
            <i className="fas fa-star"></i>
            {props.product.review}
            {<StarRating value={props.product.review} />}
          </div>
          <div className="product-wid-price">
            <ins>
              $
              {utils.fix2(props.product.price -
                (props.product.price * props.product.discountRate) / 100)}
            </ins>
            <del>${utils.fix2(props.product.price)}</del>
          </div>
        </NavLink>
      </div>
    </Fragment>
  );
};
export default ProductItem;
