-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "cookTimer" TEXT NOT NULL,
    "portion" TEXT NOT NULL,
    "ingredients" TEXT[],
    "instructions" TEXT[],

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);
