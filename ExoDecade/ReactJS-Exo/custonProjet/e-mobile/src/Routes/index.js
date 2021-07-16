
import ProductsList from "./../containers/HomeProducts/ProductsList";
import Basket from './../pages/Basket';
const Routes = [
	{
		path: '/product-list/:productListId',
		isExact: true,
		component : ProductsList,
		title: "Liste des produits"
	},
	{
		path: '/bascket',
		isExact: true,
		component : Basket,
		title: "Panier"
	},

]
export default Routes;