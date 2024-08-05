import useShop from '../ShopContext';

const CartProducts = () => {
  const { products, total, removeFromCart } = useShop();

  if(products.length === 0){
    return <h2 className='cart-products' >Cart is empty!</h2>
  }

  return (
    <div className="cart-products">
      <h2>Cart Products</h2>

      {products.map((product) => (
        <div className="cart-product">
          <div className="cart-title-img">
            <img src={product.urlImage} alt="" height={100} />
            <span>{product.name}</span>
          </div>
          <h5>${product.price}</h5>
          <span className="delete" onClick={() => removeFromCart(product)}>
            Delete
          </span>
        </div>
      ))}
      <div className="total-price">
        <h2>Total Price: ${total}</h2>
      </div>
    </div>
  );
};

export default CartProducts;
