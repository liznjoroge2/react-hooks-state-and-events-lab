import React, { useState } from 'react';
import Item from './Item'; // Ensure the path to Item component is correct

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Dairy">Dairy</option>
        {/* Add other categories as needed */}
      </select>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
