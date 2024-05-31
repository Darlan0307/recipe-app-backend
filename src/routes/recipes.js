import { Router } from "express";
import { RecipeController } from "../controller/RecipeController.js";

const recipecontroller = new RecipeController();

export const routesRecipe = Router();

routesRecipe.get("/recipes", recipecontroller.getAllRecipes);

routesRecipe.get("/getRecipeByFilters", recipecontroller.getRecipeByFilters);

routesRecipe.get("/getRecipeById/:id", recipecontroller.getRecipeById);
