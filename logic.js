const axios = require('axios');

const baseUrl = 'http://localhost:8001/recipes'; // Adjust the base URL according to your server configuration


// Function to search for recipes based on a query string
const searchRecipes = async (query) => {
    const searchKey = req.query.search
console.log(searchKey);
const query={
    name:{$regex:searchKey,$options:"i"}
  }
  try {
    const response = await axios.get(`${baseUrl}?search=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for recipes:', error);
    throw error;
  }
};

// Function to add a new recipe
const addRecipe = async (recipeData) => {
  try {
    const response = await axios.post(baseUrl, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};

// Function to delete a recipe by ID
const deleteRecipe = async (recipeId) => {
  try {
    const response = await axios.delete(`${baseUrl}/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

// Function to update a recipe by ID
const updateRecipe = async (recipeId, updatedRecipeData) => {
  try {
    const response = await axios.put(`${baseUrl}/${recipeId}`, updatedRecipeData);
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

module.exports = {
  getAllRecipes,
  searchRecipes,
  addRecipe,
  deleteRecipe,
  updateRecipe,
};
