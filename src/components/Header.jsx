import { Link } from 'react-router-dom';
import useShop from '../ShopContext';
const Header = () => {
  const { products } = useShop();
  return (
    <div className="menu">
      <div>
        <Link to="/" className="logo">
          Mini eCommerce
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <Link to="/cart">Cart</Link>
      </div>

      <Link to="/cart">
        <span className="cart">{products.length}</span>
      </Link>
    </div>
  );
};

export default Header;
