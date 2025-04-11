-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('VENDEDOR', 'ADMINISTRADOR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "roles" "Rol"[],
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
