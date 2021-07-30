import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { categoriesActions } from "store/catagoriesStore";
import api from "api/apiFetch";

const NavBar = (props) => {
  const [error, setError] = useState(null);
  const initcategorie = async () => {
    const resultCat = await api({ path: "/categories" });
    if (resultCat.apiError) {
      setError(resultCat.apiError);
      return;
    }
    resultCat && dispatch(categoriesActions.initcategories(resultCat));
  };
  useEffect(() => {
    initcategorie();
    // eslint-disable-next-line
  }, []);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const setCategorieHandler = (event) => {
    dispatch(categoriesActions.setSelectedCategorie({name:event.target.outerText}));
  };
  return (
    <Fragment>
      <ul className={props.customClass}>
        <li className={classes["nav-item"]}>
          <NavLink to="/">Home</NavLink>
        </li>
        {categories &&
          categories.map((catagorie) => {
            if( props.expectedLink!== 'default' &&  catagorie.name !==  props.expectedLink) {

              return (
                <li key={catagorie.id} className={classes["nav-item"]}>
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#5a88ca",
                      textDecoration: "underline",
                    }}
                    to={`/product-list/${catagorie.productListId}`}
                    onClick={setCategorieHandler}
                  >
                    {catagorie.name}
                  </NavLink>
                </li>
              );
            } else {
              return (<li style={{borderBottom: 'none', padding:0}}  key={Math.random()} ></li>)
            }
          })}
      </ul>
      {error && <p>oups une erreur {error}</p>}
    </Fragment>
  );
};
export default NavBar;
