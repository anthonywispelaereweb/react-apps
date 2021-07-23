
import ProductsList from "./../containers/HomeProducts/ProductsList";
import ProductDetails from "./../containers/HomeProducts/ProductDetails";
import Basket from './../pages/Basket';
import Home from './../pages/Home';
import {Route , Switch} from 'react-router';
const routes = [
	{
		path: '/',
		isExact: true,
		component : Home,
		title: "Détails du produit"
	},
	{
		path: '/products/:idProduct',
		isExact: false,
		component : ProductDetails,
		title: "Détails du produit"
	},
	{
		path: '/product-list/:productListId',
		isExact: false,
		component : ProductsList,
		title: "Liste des produits"
	},
	{
		path: '/basket',
		isExact: false,
		component : Basket,
		title: "Panier"
	},
]
const NavigationRoute = ()=> {
	return (
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

	)
}
export default NavigationRoute;