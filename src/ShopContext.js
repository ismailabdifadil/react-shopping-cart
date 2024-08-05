import { createContext, useContext, useReducer } from 'react';
import shopReducer, { initialState } from './shopReducer';

const ShopContext = createContext(initialState);

export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedProducts = state.products.concat(product);
    calculateTotalPrice(updatedProducts);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedProducts,
      },
    });
  };
  
  const removeFromCart = (product) => {
    const updatedProducts = state.products.filter((p) => p.id !== product.id);
    calculateTotalPrice(updatedProducts);
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedProducts,
      },
    });
  };

  const calculateTotalPrice = (products) => {
    let total = 0;

    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: 'CALCULATE_TOTAL_PRICE',
      payload: total,
    });
  };

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('Context must be used inside ShopContext');
  }
  return context;
};

export default useShop;
