/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Order`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NULL,
    `nickname` VARCHAR(191) NULL,
    `requester` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `budget` BOOLEAN NOT NULL,
    `model` VARCHAR(191) NULL,
    `brand` VARCHAR(191) NULL,
    `plate` VARCHAR(191) NOT NULL,
    `fleet` VARCHAR(191) NULL,
    `chassis` VARCHAR(191) NULL,
    `renavam` VARCHAR(191) NULL,
    `km` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NULL,
    `age` VARCHAR(191) NULL,
    `observation` VARCHAR(191) NULL,
    `reported` VARCHAR(191) NOT NULL,
    `problem_verified` VARCHAR(191) NULL,
    `services_performed` VARCHAR(191) NULL,
    `nf_service` VARCHAR(191) NULL,
    `nf_parts` VARCHAR(191) NULL,
    `invoices` VARCHAR(191) NULL,
    `description_general` VARCHAR(191) NULL,
    `obs_wheel` VARCHAR(191) NULL,
    `obs_accessories` VARCHAR(191) NULL,
    `obs_structure` VARCHAR(191) NULL,
    `add_observation` VARCHAR(191) NULL,
    `extra_observation` VARCHAR(191) NULL,
    `total_price` VARCHAR(191) NULL,
    `discount` VARCHAR(191) NULL,
    `payment_method` VARCHAR(191) NULL,
    `total_payable` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
