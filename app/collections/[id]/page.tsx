import { db } from "@/lib/db";
import { collections, collectionRepos } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const collectionId = parseInt(id);

  const collection = await db.query.collections.findFirst({
    where: eq(collections.id, collectionId),
  });

  if (!collection) {
    notFound();
  }

  const reposInCollection = await db.query.collectionRepos.findMany({
    where: eq(collectionRepos.collectionId, collectionId),
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{collection.name}</h1>
        {collection.description && (
          <p className="text-gray-600 mt-2">{collection.description}</p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Repositories in this collection ({reposInCollection.length})</h2>
        
        {reposInCollection.length > 0 ? (
          <div className="grid gap-4">
            {reposInCollection.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <a 
                  href={`https://github.com/${item.repoFullName}`} 
                  target="_blank"
                  className="font-medium hover:underline"
                >
                  {item.repoFullName}
                </a>
                {item.notes && <p className="text-sm text-gray-600 mt-1">{item.notes}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No repositories in this collection yet.</p>
        )}
      </div>
    </div>
  );
}