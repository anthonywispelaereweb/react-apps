import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import {categoriesActions} from './../../store/catagoriesStore';

const NavBar = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const setCategorieHandler = (event) => {
    dispatch(categoriesActions.setSelectedCategorie(event.target.outerText))
    localStorage.setItem('currentCategoriesName', event.target.outerText)
  }
  return (
    <ul className={props.customClass}>
      <li className={classes["nav-item"]}>
        <NavLink to="/">Home</NavLink>
      </li>
      {categories &&
        categories.map((catagorie) => {
          return (
            <li key={catagorie.id} className={classes["nav-item"]}>
              <NavLink to={`/product-list/${catagorie.productListId}`} onClick={setCategorieHandler}>
                {catagorie.name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
export default NavBar;
