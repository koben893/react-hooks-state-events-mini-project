import React, {useState} from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, onCategoryChange } =props;

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  }

  function handleCategoryClick ( event ) {
    setSelectedCategory( event.target.value )
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
      <button
        key = {category}
        className = {category === selectedCategory}
        onClick = {() => handleCategoryClick(category)}
        >
          {category}
        </button>  
      ))}
    </div>
  );
}

export default CategoryFilter;
//stopped at when a button is clicked to change category 