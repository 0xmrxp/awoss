import { db } from "@/lib/db";
import { collections, collectionRepos } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { auth } from "@/auth";

export default async function CollectionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const collectionId = parseInt(id);
  const session = await auth();

  const collection = await db.query.collections.findFirst({
    where: eq(collections.id, collectionId),
  });

  if (!collection) notFound();

  // Check privacy
  if (!collection.isPublic && (!session?.user?.id || parseInt(session.user.id) !== collection.userId)) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-2xl font-bold">This collection is private</h1>
        <p className="text-gray-600">You do not have permission to view this collection.</p>
      </div>
    );
  }

  const repos = await db.query.collectionRepos.findMany({
    where: eq(collectionRepos.collectionId, collectionId),
    orderBy: (collectionRepos, { desc }) => [desc(collectionRepos.addedAt)],
  });

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold">{collection.name}</h1>
          {collection.isPublic && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
              Public
            </span>
          )}
        </div>
        <p className="text-xl text-gray-600">{collection.description}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Repositories ({repos.length})</h2>
        
        {repos.length === 0 ? (
          <div className="py-12 border-2 border-dashed rounded-xl text-center text-gray-500">
            No repositories in this collection yet.
          </div>
        ) : (
          <div className="grid gap-4">
            {repos.map((repo) => (
              <div key={repo.id} className="p-6 border rounded-xl hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      <a 
                        href={`https://github.com/${repo.repoFullName}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {repo.repoFullName}
                      </a>
                    </h3>
                    {repo.notes && (
                      <p className="text-sm text-gray-600 italic mt-2 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-200">
                        "{repo.notes}"
                      </p>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    Added {new Date(repo.addedAt!).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
