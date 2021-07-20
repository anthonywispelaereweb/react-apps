import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
// import { useSelector  } from "react-redux";


const ProductItem = (props) => {
  // const categoriesName =  useSelector(state => state.categories.selectedCategorie) || localStorage.getItem('currentCategoriesName');
  // const loadImage = imageName => {
  //   import(`./../../img/${imageName}`).then(image => {
  //     return image.default;
  //   });
  // };
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
          {/* <img
            src={require(`./../../assets/${categoriesName}/${props.product.imageName}`)}
            alt=""
            className="product-thumb"
          /> */}
        
          <h2>
            {props.product.name}
          </h2>
          <div className="product-wid-rating">{props.product.review}</div>
          <div className="product-wid-price">
            <ins>
              $
              {props.product.price -
                (props.product.price * props.product.discountRate) / 100}
            </ins>
            <del>${props.product.price}</del>
          </div>
        </NavLink>
      </div>
    </Fragment>
  );
};
export default ProductItem;
