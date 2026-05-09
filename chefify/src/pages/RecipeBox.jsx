import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './RecipeBox.css';

const SAVED_RECIPES = [
  { id: 2, title: 'Avocado Toast with Poached Egg', time: 10, rating: 4.9, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80', isSaved: true },
  { id: 5, title: 'Grilled Salmon with Asparagus', time: 25, rating: 4.9, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80', isSaved: true },
];

const RecipeBox = () => {
  return (
    <div className="recipe-box-page container">
      <div className="profile-header">
        <div className="profile-info">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User avatar" 
            className="profile-avatar"
          />
          <div>
            <h1 className="profile-name">Felix's Recipe Box</h1>
            <p className="profile-bio">Food enthusiast and home cook.</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-box">
            <span className="stat-number">{SAVED_RECIPES.length}</span>
            <span className="stat-label">Saved Recipes</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">3</span>
            <span className="stat-label">Folders</span>
          </div>
        </div>
      </div>

      <div className="box-tabs">
        <button className="tab-btn active">All Saved Recipes</button>
        <button className="tab-btn">Breakfast</button>
        <button className="tab-btn">Healthy</button>
        <button className="tab-btn">Favorites</button>
      </div>

      {SAVED_RECIPES.length > 0 ? (
        <div className="recipes-grid">
          {SAVED_RECIPES.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🍳</div>
          <h3>Your Recipe Box is Empty</h3>
          <p>Start saving recipes you love to find them here later.</p>
          <button className="btn btn-primary mt-4">Discover Recipes</button>
        </div>
      )}
    </div>
  );
};

export default RecipeBox;
