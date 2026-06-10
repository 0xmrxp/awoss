"use server";

import { db } from "@/lib/db";
import { collections, collectionRepos } from "@/lib/db/schema";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getUserCollections() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.query.collections.findMany({
    where: eq(collections.userId, parseInt(session.user.id)),
    orderBy: (collections, { desc }) => [desc(collections.createdAt)],
  });
}

export async function createCollection(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const isPublic = formData.get("isPublic") === "on";

  if (!name) throw new Error("Name is required");

  const [newCollection] = await db
    .insert(collections)
    .values({
      userId: parseInt(session.user.id),
      name,
      description: description || null,
      isPublic,
    })
    .returning();

  revalidatePath("/collections");
  redirect("/collections");
}

export async function addRepoToCollection(collectionId: number, repoFullName: string, repoId: number, notes?: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  // Verify ownership
  const collection = await db.query.collections.findFirst({
    where: and(
      eq(collections.id, collectionId),
      eq(collections.userId, parseInt(session.user.id))
    ),
  });

  if (!collection) throw new Error("Collection not found or unauthorized");

  // Check if repo already exists in collection
  const existing = await db.query.collectionRepos.findFirst({
    where: and(
      eq(collectionRepos.collectionId, collectionId),
      eq(collectionRepos.repoFullName, repoFullName)
    ),
  });

  if (existing) return { error: "Repository already in collection" };

  await db.insert(collectionRepos).values({
    collectionId,
    repoFullName,
    repoId,
    notes: notes || null,
  });

  revalidatePath(`/collections/${collectionId}`);
  return { success: true };
}

export async function deleteCollection(id: number) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  await db.delete(collections).where(
    and(
      eq(collections.id, id),
      eq(collections.userId, parseInt(session.user.id))
    )
  );

  revalidatePath("/collections");
  redirect("/collections");
}
