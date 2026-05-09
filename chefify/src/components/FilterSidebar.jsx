import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <div className="filter-section">
        <h3 className="filter-title">Type</h3>
        <ul className="filter-list">
          <li>
            <label className="checkbox-container">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              Breakfast
            </label>
          </li>
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Lunch
            </label>
          </li>
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Dinner
            </label>
          </li>
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Snacks
            </label>
          </li>
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Desserts
            </label>
          </li>
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Time</h3>
        <div className="time-slider">
          <input type="range" min="10" max="120" defaultValue="45" className="slider" />
          <div className="time-labels">
            <span>10 min</span>
            <span>120 min</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Rating</h3>
        <ul className="filter-list">
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              5 Stars
            </label>
          </li>
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              4+ Stars
            </label>
          </li>
          <li>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              3+ Stars
            </label>
          </li>
        </ul>
      </div>

      <button className="btn btn-primary w-full mt-4">Apply Filters</button>
    </aside>
  );
};

export default FilterSidebar;
