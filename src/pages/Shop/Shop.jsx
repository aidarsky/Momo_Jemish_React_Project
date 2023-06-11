import React, { useState } from 'react';
import './shop.css'
import ProductCard from './ProductCard';
import productsData from './products.json';

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>Магазин Момо-Жемиш</h1>
      <div className="product-container">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <h2>Корзина Товаров</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.title} 1кг</li>
        ))}
      </ul>
    </div>
  );
};
export default Shop;