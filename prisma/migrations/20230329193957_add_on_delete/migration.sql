-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AssemblyResult` (
    `id` VARCHAR(191) NOT NULL,
    `assemblyTime` INTEGER NOT NULL,
    `errorsCount` INTEGER NOT NULL,
    `assemblyType` VARCHAR(191) NOT NULL,
    `assemblyDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AssemblyError` (
    `id` VARCHAR(191) NOT NULL,
    `errorName` VARCHAR(191) NOT NULL,
    `detailName` VARCHAR(191) NOT NULL,
    `step` INTEGER NULL,
    `assemblyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AssemblyResult` ADD CONSTRAINT `AssemblyResult_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AssemblyError` ADD CONSTRAINT `AssemblyError_assemblyId_fkey` FOREIGN KEY (`assemblyId`) REFERENCES `AssemblyResult`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
