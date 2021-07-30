import { createSlice } from "@reduxjs/toolkit";
const updateTotal = (state) => {
  let newTotal = 0;
  if (state.products) {
    state.products.map((product) => {
      return (newTotal +=
        (Number(product.price) -
        Number((product.price * product.discountRate) / 100)) * Number(product.qty));
    });
  }
  return newTotal;
};
const transFormProductBasket = (data) => {
  return {
    id: data.product.id,
    name: data.product.name,
    imageName: data.product.imageName,
    discountRate: data.product.discountRate,
    review: data.product.review,
    price: data.product.price,
    qty: Number(data.quantity),
  };
};

const initialBasketState = {
  carts: [],
  products: [],
  subTotal: 0,
  tax: 0,
  total: 0,
};
const basketSlice = createSlice({
  name: "categories",
  initialState: initialBasketState,
  reducers: {
    fetchExistingCarts(state, action) {
      state.carts = action.payload;
      for (let product of action.payload[0].items) {
        if (!product.discountRate) {
          product.discountRate = 0;
        }
        if (!product.review) {
          product.review = 0;
        }
        state.products.push(product);
      }
      state.total = updateTotal(state);
      state.subTotal = action.payload[0].subTotal;
      state.tax = action.payload[0].tax;
    },
    addProduct(state, action) {
      // check if have a same product
      let haveProductInBasket = state.products.find(
        (product) => product.id === action.payload.product.id
        );
        
      // if have a same product update a quantity
      if (haveProductInBasket) {
        state.products.map(
          (product) => {
            if (product.id === action.payload.product.id)
            product.qty = Number(product.qty) + Number(action.payload.quantity)
            return product;
          }
        );
        // else add a nex product
      } else {
        const newProduct = transFormProductBasket(action.payload);
        state.products = [...state.products, newProduct];

      }
      // update a total
      const newTotal = updateTotal(state);
      state.total = newTotal;
    },
    removeProduct(state, action) {
      const filteredProduct = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.products = filteredProduct;
      state.total = updateTotal(state);
    },
    setTotal(state) {
      state.total = updateTotal(state.products);
    },
  },
});
export const basketActions = basketSlice.actions;
export default basketSlice.reducer;
