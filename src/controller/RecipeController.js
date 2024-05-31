import { prisma } from "../prisma/prisma.js";

export class RecipeController {
  // Buscar Receitas pelos filtros, fazendo a páginação
  async getRecipeByFilters(req, res) {
    try {
      const name = req.query.name || "";
      const category = req.query.category || "";
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      if (page < 1 || limit < 1) {
        return res
          .status(400)
          .json({ error: "Page and limit must be positive integers" });
      }

      const filters = {
        name: {
          contains: name,
          mode: "insensitive",
        },
        category: {
          contains: category,
          mode: "insensitive",
        },
      };

      const qtdRecipes = await prisma.recipe.count({ where: filters });

      const recipeFiltred = await prisma.recipe.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: filters,
      });

      const lastPageNumber = Math.ceil(qtdRecipes / limit);

      res.status(200).json({
        data: recipeFiltred,
        currentPage: page,
        limit: limit,
        totalResults: qtdRecipes,
        totalPages: lastPageNumber,
        hasNextPage: page < lastPageNumber,
        hasPreviousPage: page > 1,
      });
    } catch (error) {
      res.status(401).json(error);
    }
  }

  // Buscar Receita por Id
  async getRecipeById(req, res) {
    try {
      const { id } = req.params;

      const recipe = await prisma.recipe.findUnique({
        where: { id },
      });

      res.status(200).json({ data: recipe });
    } catch (error) {
      res.status(401).json(error);
    }
  }

  async getAllRecipes(_, res) {
    try {
      const recipes = await prisma.recipe.findMany();

      res.status(200).json(recipes);
    } catch (error) {
      res.status(401).json(error);
    }
  }
}
