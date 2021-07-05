import { products } from "../products";
import { 
  ADD_PRODUCT,
  CLEAR_CART,
} from "../actions";

const INITIAL_STATE = {
  products: [...products],
  totalCart: 0,
  cartProducts: [],
};

function productReducer (state = INITIAL_STATE, { type, product }) {
  switch (type) {
    case ADD_PRODUCT:
      state.cartProducts = [...state.cartProducts, product];
      state.totalCart += 1
      return state;
    // case 'REMOVE_PRODUCT':
    //   state.cartProducts = state.cartProducts.filter(ele => ele !== product);
    //   return state;
    case CLEAR_CART:
      state.cartProducts = [];
      return state;
    default:
      return state;
  };
}

export default productReducer;
