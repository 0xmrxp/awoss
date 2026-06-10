"use server";

import { db } from "@/lib/db";
import { collections, collectionRepos } from "@/lib/db/schema";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createCollection(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const isPublic = formData.get("isPublic") === "on";

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
  return newCollection;
}

export async function addRepoToCollection(collectionId: number, repoFullName: string, repoId: number, notes?: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  await db.insert(collectionRepos).values({
    collectionId,
    repoFullName,
    repoId,
    notes: notes || null,
  });

  revalidatePath(`/collections/${collectionId}`);
}