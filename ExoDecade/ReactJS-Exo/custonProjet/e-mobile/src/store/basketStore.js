import { createSlice } from "@reduxjs/toolkit";
const updateTotal = (state) => {
  let newTotal =0;
  state.products.map( (product) => {
    console.log('product.price',product.price)
    console.log('product.quantite',product.qty)
    console.log('product.discountRate',product.discountRate)
    let discountRate = product.discountRate ? product.discountRate : 0;
    return newTotal += (Number(product.price) - Number(product.price * discountRate / 100) *  Number(product.qty));
  })
  return newTotal
}
const transFormProductBasket = (data) => {
  console.log('have discountRate' , data.product)
  return {
    id: data.product.id,
    name : data.product.name,
    imageName: data.product.imageName,
    discountRate : data.product.discountRate,
    price: data.product.price,
    qty: Number(data.quantity)
  }
}

const initialBasketState = {
  carts:[],
  products: [],
  subTotal: 0,
  tax: 0,
  total: 0,
};
const basketSlice = createSlice({
  name: "categories",
  initialState: initialBasketState,
  reducers: {
    fetchExistingCarts(state,action) {
      state.carts = action.payload;
      for ( let product of action.payload[0].items) {
        console.log('product item fetch panier', product)
        if(!product.discountRate ) {
          product.discountRate = 0;
        }
        state.products.push(product)
      }
      state.total = updateTotal(state)
      state.subTotal = action.payload[0].subTotal
      state.tax = action.payload[0].tax
    },
    addProduct(state, action) {
      const newProduct = transFormProductBasket(action.payload)
      state.products = [...state.products, newProduct]
      console.log('newProduct',newProduct)
      const newTotal = updateTotal(state)
      console.log('newTotal',newTotal)
      state.total = newTotal;

    },
    setTotal(state) {
      state.total = updateTotal(state.products);
    },
  },
});
export const basketActions = basketSlice.actions;
export default basketSlice.reducer;
