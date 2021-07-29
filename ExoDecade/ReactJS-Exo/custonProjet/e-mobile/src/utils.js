const utils = {
  fix2(value) {
    return value.toFixed(2);
  },
  discountRacePrice(product, quantity) {
    return (
      (Number(product.price) -
        Number(product.price * product.discountRate) / 100) *
      Number(quantity)
    );
  },
  firstCapital(value) {
    return (value + "").charAt(0).toUpperCase() + value.substr(1);
  },
};
export default utils;
