import {Fragment} from "react";
import { NavLink } from 'react-router-dom';

const Basket = () => {
	return (
		<Fragment>
			<h3>Mon panier</h3>
			<NavLink to='/'>Retour</NavLink>
		</Fragment>
	)
};
export default Basket;