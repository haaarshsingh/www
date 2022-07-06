-- CreateTable
CREATE TABLE "Link" (
    "id" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "url" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_slug_key" ON "Link"("slug");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
