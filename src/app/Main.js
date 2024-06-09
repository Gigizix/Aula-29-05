import React, { useEffect, useState } from 'react';
import './Main.css';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('adicionar link da imagem http)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="main">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Categoria: {product.category}</p>
          <p>Preço: ${product.price}</p>
          <p>Avaliações: {product.rating.count}</p>
        </div>
      ))}
    </main>
  );
}

export default Main;