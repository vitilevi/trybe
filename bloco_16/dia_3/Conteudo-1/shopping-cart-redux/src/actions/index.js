export const ADD_PRODUCT = 'ADD_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});