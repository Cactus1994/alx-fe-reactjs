import { useRecipeStore } from "./recipeStore";
import React from "react";
import { Link } from 'react-router-dom';
import AddRecipeForm from "./AddRecipeForm";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        <ul>
            {recipes.map(recipe => (
                <li key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </li>
            ))}
        </ul>
        <AddRecipeForm />
      </div>
    );
  };

export default RecipeList
