const ProductCard = ({ product, onAddToCart }) => {
    return (
      <div className="product-card">
        <img src={product.picture} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Цена: {product.price} SOM KGZ</p>
        <p>Вес: {product.kg} kg</p>
        <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
      </div>
    );
  };
  
  export default ProductCard;