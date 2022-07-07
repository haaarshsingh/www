/*
  Warnings:

  - You are about to drop the column `id` on the `Link` table. All the data in the column will be lost.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Link" (
    "slug" STRING NOT NULL,
    "url" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("slug")
);
DROP INDEX "Link_slug_key";
INSERT INTO "_prisma_new_Link" ("slug","url","userId") SELECT "slug","url","userId" FROM "Link";
DROP TABLE "Link" CASCADE;
ALTER TABLE "_prisma_new_Link" RENAME TO "Link";
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
