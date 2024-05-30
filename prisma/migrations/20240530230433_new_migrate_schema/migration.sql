/*
  Warnings:

  - You are about to drop the column `description` on the `recipes` table. All the data in the column will be lost.
  - Added the required column `portion` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipes" DROP COLUMN "description",
ADD COLUMN     "portion" TEXT NOT NULL;
