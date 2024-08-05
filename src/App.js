import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import './styles.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState(5);
  return (
    <div className="container">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/cart"
          element={<CartPage setCart={setCart} cart={cart} />}
        />
      </Routes>
    </div>
  );
};
export default App;
