import CartProducts from '../components/CartProducts';
import Payment from '../components/Payment';

const CartPage = ({ setCart }) => {
  setCart(10);
  return (
    <div className="cart-container">
      <CartProducts />
      <Payment />
    </div>
  );
};

export default CartPage;
