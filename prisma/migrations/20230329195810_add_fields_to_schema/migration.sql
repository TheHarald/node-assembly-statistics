/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nodeName` to the `AssemblyResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `assemblyerror` MODIFY `step` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `assemblyresult` ADD COLUMN `imageURL` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `nodeName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `login` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_login_key` ON `User`(`login`);
