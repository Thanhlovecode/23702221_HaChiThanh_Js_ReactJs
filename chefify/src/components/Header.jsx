import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChefHat } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-area">
          <ChefHat size={32} color="var(--primary)" />
          <span className="logo-text">Chefify</span>
        </Link>
        
        <div className="search-bar">
          <Search size={20} className="search-icon" color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="What would you like to cook?" 
            className="search-input"
          />
        </div>

        <nav className="nav-links">
          <Link to="/recipes" className="nav-link">Recipes</Link>
          <Link to="/ingredients" className="nav-link">Ingredients</Link>
          <Link to="/occasions" className="nav-link">Occasions</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>

        <div className="auth-buttons">
          <Link to="/recipe-box" className="btn btn-outline btn-recipe-box">Your Recipe Box</Link>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User avatar" 
            className="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
