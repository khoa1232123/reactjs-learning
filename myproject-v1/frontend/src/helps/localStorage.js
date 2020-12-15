export const getCartItemsLocal = () => {
  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : null;
  return cartItems;
};

export const setCartItemsLocal = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
