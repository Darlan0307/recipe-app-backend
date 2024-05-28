import { prisma } from "../prisma/prisma.js";

export class RecipeController {
  async getAllRecipes(_, res) {
    try {
      const recipes = await prisma.recipe.findMany();

      res.status(200).json(recipes);
    } catch (error) {
      res.status(401).json(error);
    }
  }

  async setDataRecipes(req, res) {
    try {
      const { start, end } = req.query;

      console.log(start + end);

      res.status(200).json({});
    } catch (error) {
      res.status(401).json(error);
    }
  }
}
