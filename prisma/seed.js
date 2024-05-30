import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const recipes = [];

  for (const recipe of recipes) {
    const createdRecipe = await prisma.recipe.create({
      data: {
        name: recipe.name,
        urlImage: recipe.urlImage,
        category: recipe.category,
        cookTimer: recipe.timer,
        ingredients: recipe.ingredients,
        instructions: recipe.preparations,
        portion: recipe.portion,
      },
    });

    console.log(`Created recipe with id: ${createdRecipe.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
