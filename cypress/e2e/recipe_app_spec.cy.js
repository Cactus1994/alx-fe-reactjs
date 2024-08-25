describe('Recipe Sharing App', () => {
    it('should display RecipeList component', () => {
      cy.visit('/'); // Adjust the path based on your app's routing
      cy.get('[data-testid="recipe-list"]').should('exist'); // Assuming you added a data-testid attribute
    });
  
    it('should display AddRecipeForm component', () => {
      cy.visit('/'); // Adjust the path based on your app's routing
      cy.get('[data-testid="add-recipe-form"]').should('exist'); // Assuming you added a data-testid attribute
    });
  });
  