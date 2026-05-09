import React from 'react';
import FilterSidebar from '../components/FilterSidebar';
import RecipeCard from '../components/RecipeCard';
import './Home.css';

const MOCK_RECIPES = [
  { id: 1, title: 'Italian Salad with Tomatoes and Mozzarella', time: 15, rating: 4.8, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80', isSaved: false },
  { id: 2, title: 'Avocado Toast with Poached Egg', time: 10, rating: 4.9, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80', isSaved: true },
  { id: 3, title: 'Spicy Chicken and Rice Bowl', time: 30, rating: 4.5, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80', isSaved: false },
  { id: 4, title: 'Berry Spinach Smoothie', time: 5, rating: 4.7, image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80', isSaved: false },
  { id: 5, title: 'Grilled Salmon with Asparagus', time: 25, rating: 4.9, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80', isSaved: true },
  { id: 6, title: 'Homemade Margherita Pizza', time: 45, rating: 4.6, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', isSaved: false },
];

const Home = () => {
  return (
    <div className="home-page container">
      <div className="page-header">
        <h1 className="page-title">Discover Recipes</h1>
        <p className="page-subtitle">Find the perfect dish for your next meal from our curated collection.</p>
      </div>

      <div className="recipe-discovery-layout">
        <div className="sidebar-column">
          <FilterSidebar />
        </div>
        
        <div className="content-column">
          <div className="recipes-grid">
            {MOCK_RECIPES.map(recipe => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>

          <div className="pagination">
            <button className="btn btn-outline" disabled>Previous</button>
            <div className="page-numbers">
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
            </div>
            <button className="btn btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
