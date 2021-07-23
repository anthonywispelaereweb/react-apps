
import ProductsList from "./../containers/HomeProducts/ProductsList";
import ProductDetails from "./../containers/HomeProducts/ProductDetails";
import Basket from './../pages/Basket';
const Routes = [
	{
		path: '/products/:idProduct',
		isExact: true,
		component : ProductDetails,
		title: "Détails du produit"
	},
	{
		path: '/product-list/:productListId',
		isExact: true,
		component : ProductsList,
		title: "Liste des produits"
	},
	{
		path: '/basket',
		isExact: true,
		component : Basket,
		title: "Panier"
	},

]
export default Routes;