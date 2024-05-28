/*
  Warnings:

  - You are about to drop the `RecipesRelated` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecipesRelated" DROP CONSTRAINT "RecipesRelated_recipeId_fkey";

-- DropTable
DROP TABLE "RecipesRelated";
