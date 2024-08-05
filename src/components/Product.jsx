import { useEffect, useState } from 'react';
import useShop from '../ShopContext';

const Product = ({ product }) => {
  const { addToCart, removeFromCart, products } = useShop();
  const [isInCart, setIsInCart] = useState(true);

  useEffect(() => {
    const isCart = products.filter((pro) => pro.id === product.id);
    if (isCart.length > 0) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

    console.log(isCart);
  }, [products]);

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="product">
      <button
        className={`btn ${isInCart ? 'btn-secondary' : 'btn'}`}
        onClick={handleAddToCart}
      >
        {isInCart ? '-' : '+'}
      </button>
      <img src={product.urlImage} alt="" />
      <div className="product-info">
        <p>{product.name}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
