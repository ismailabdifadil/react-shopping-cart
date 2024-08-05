import { products } from '../data/products';
import Product from './Product';
const Products = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
