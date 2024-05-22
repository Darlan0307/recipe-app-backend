import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const recipes = [
    {
      name: "Spaghetti Carbonara",
      image: "http://example.com/carbonara.jpg",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      category: "Pasta",
      origin: "Italy",
      cookTimer: "30 minutes",
      ingredients: [
        { ingredientName: "Spaghetti", ingredientPortion: "200g" },
        { ingredientName: "Pancetta", ingredientPortion: "100g" },
        { ingredientName: "Eggs", ingredientPortion: "4" },
        { ingredientName: "Parmesan Cheese", ingredientPortion: "50g" },
        { ingredientName: "Black Pepper", ingredientPortion: "to taste" },
        { ingredientName: "Salt", ingredientPortion: "to taste" },
      ],
      instructions: [
        { instruction: "Cook the spaghetti according to the package instructions." },
        { instruction: "Fry the pancetta until crispy." },
        { instruction: "Beat the eggs and mix with grated Parmesan cheese." },
        { instruction: "Drain the spaghetti and combine with the pancetta." },
        { instruction: "Remove from heat and quickly mix in the egg and cheese mixture." },
        { instruction: "Season with salt and black pepper to taste." },
      ],
    },
    {
      name: "Chicken Curry",
      image: "http://example.com/chickencurry.jpg",
      description: "A flavorful and spicy chicken curry with a blend of aromatic spices.",
      category: "Curry",
      origin: "India",
      cookTimer: "45 minutes",
      ingredients: [
        { ingredientName: "Chicken", ingredientPortion: "500g" },
        { ingredientName: "Onion", ingredientPortion: "1 large, chopped" },
        { ingredientName: "Garlic", ingredientPortion: "4 cloves, minced" },
        { ingredientName: "Ginger", ingredientPortion: "1 tablespoon, grated" },
        { ingredientName: "Tomatoes", ingredientPortion: "2, chopped" },
        { ingredientName: "Curry Powder", ingredientPortion: "2 tablespoons" },
        { ingredientName: "Coconut Milk", ingredientPortion: "400ml" },
        { ingredientName: "Salt", ingredientPortion: "to taste" },
        { ingredientName: "Cilantro", ingredientPortion: "for garnish" },
      ],
      instructions: [
        { instruction: "Heat oil in a large pot and sauté onions until golden brown." },
        { instruction: "Add garlic and ginger, and cook for another minute." },
        { instruction: "Add chicken pieces and brown on all sides." },
        { instruction: "Stir in curry powder and cook for a minute." },
        { instruction: "Add tomatoes and cook until they soften." },
        { instruction: "Pour in coconut milk and simmer until chicken is cooked through." },
        { instruction: "Season with salt and garnish with chopped cilantro before serving." },
      ],
    },
  ];

  for (const recipe of recipes) {
    const createdRecipe = await prisma.recipe.create({
      data: {
        name: recipe.name,
        image: recipe.image,
        description: recipe.description,
        category: recipe.category,
        origin: recipe.origin,
        cookTimer: recipe.cookTimer,
        ingredients: {
          create: recipe.ingredients,
        },
        instructions: {
          create: recipe.instructions,
        },
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
