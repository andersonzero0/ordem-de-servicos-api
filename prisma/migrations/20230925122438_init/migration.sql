-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT,
    "nickname" TEXT,
    "requester" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "budget" BOOLEAN NOT NULL,
    "model" TEXT,
    "brand" TEXT,
    "plate" TEXT NOT NULL,
    "fleet" TEXT,
    "chassis" TEXT,
    "renavam" TEXT,
    "km" TEXT NOT NULL,
    "color" TEXT,
    "age" TEXT,
    "observation" TEXT,
    "reported" TEXT NOT NULL,
    "problem_verified" TEXT,
    "services_performed" TEXT,
    "nf_service" TEXT,
    "nf_parts" TEXT,
    "invoices" TEXT,
    "description_general" TEXT,
    "obs_wheel" TEXT,
    "obs_accessories" TEXT,
    "obs_structure" TEXT,
    "add_observation" TEXT,
    "extra_observation" TEXT,
    "total_price" TEXT,
    "discount" TEXT,
    "payment_method" TEXT,
    "total_payable" TEXT,
    "status" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
