const db = require("./data/db-config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions, 
}

// getRecipes(): should return a list of all recipes in the database.

function getRecipes() {
    return db("recipes")
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe

function getShoppingList(id){
    return db("recipes")
        .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
        .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
        .select("recipe_ingredients.quantity", "ingredients.name")
}


// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getInstructions(id){
    return db("recipes")
        .join("recipe_steps", "recipes.id", "recipe_steps.recipe_id")
        .select("recipes_steps.desciption")
}