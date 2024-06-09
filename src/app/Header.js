import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" alt="Shop Logo" className="logo" />
      <div className="icons">
        <i className="cart-icon">🛒</i>
        <button className="add-product-btn">Adicionar Produto</button>
      </div>
      <p className="marketing-phrase">O melhor shop para todas as suas necessidades!</p>
    </header>
  );
}

export default Header;