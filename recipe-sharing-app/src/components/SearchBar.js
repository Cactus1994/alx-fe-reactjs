import React from 'react';
import { useRecipeStore } from './recipeStore'; // Adjust the path as needed

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
