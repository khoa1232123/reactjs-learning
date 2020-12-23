export const getCartItemsLocal = () => {
  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : null;
  return cartItems;
};

export const setCartItemsLocal = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const getLoggedIn = () => {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;
  return user;
};

export const setLoggedIn = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getToken = () => {
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null;
  return token;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const resetLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.clear();
};
