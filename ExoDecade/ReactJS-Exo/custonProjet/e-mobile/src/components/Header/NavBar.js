import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const NavBar = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <ul className={props.customClass}>
      <li className={classes["nav-item"]}>
        <NavLink to="/">Home</NavLink>
      </li>
      {categories &&
        categories.map((catagorie) => {
          return (
            <li key={catagorie.id} className={classes["nav-item"]}>
              <NavLink to={`/product-list/${catagorie.productListId}`}>
                {catagorie.name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
export default NavBar;
