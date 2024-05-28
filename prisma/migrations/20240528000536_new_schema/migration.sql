-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "cookTimer" TEXT NOT NULL,
    "ingredients" TEXT[],
    "instructions" TEXT[],

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipesRelated" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "cookTimer" TEXT NOT NULL,

    CONSTRAINT "RecipesRelated_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipesRelated" ADD CONSTRAINT "RecipesRelated_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
