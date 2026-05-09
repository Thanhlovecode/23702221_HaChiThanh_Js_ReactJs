import React from 'react';
import { Clock, Star, Bookmark } from 'lucide-react';
import './RecipeCard.css';

const RecipeCard = ({ title, image, time, rating, isSaved }) => {
  return (
    <div className="recipe-card animate-fade-in">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <button className={`save-btn ${isSaved ? 'saved' : ''}`}>
          <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          <div className="meta-item time">
            <Clock size={16} color="var(--primary)" />
            <span>{time} min</span>
          </div>
          <div className="meta-item rating">
            <Star size={16} color="#F59E0B" fill="#F59E0B" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
