import { createRoot } from 'react-dom/client';

import App from './App';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopContextProvider } from './ShopContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </StrictMode>
);