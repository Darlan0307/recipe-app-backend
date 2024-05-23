import { prisma } from '../prisma/prisma.js'

export class RecipeController{
    async getAllRecipes(req,res){
        try {
            const recipes = await prisma.recipe.findMany()

            res.status(200).json(recipes)
        } catch (error) {
            res.status(401).json(error)
        }
    }
}