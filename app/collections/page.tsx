import Link from "next/link";
import { getUserCollections } from "./actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CollectionsPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const userCollections = await getUserCollections();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Collections</h1>
          <p className="text-gray-600">Manage your curated lists of repositories</p>
        </div>
        <Link 
          href="/collections/new"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          New Collection
        </Link>
      </div>

      {userCollections.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-xl">
          <h3 className="text-xl font-medium mb-2">No collections yet</h3>
          <p className="text-gray-500 mb-6">Start by creating your first collection to organize repositories.</p>
          <Link 
            href="/collections/new"
            className="text-black font-semibold hover:underline"
          >
            Create your first collection →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userCollections.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/collections/${collection.id}`}
              className="block p-6 border rounded-xl hover:border-black transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl group-hover:underline">{collection.name}</h3>
                {collection.isPublic && (
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Public
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {collection.description || "No description provided."}
              </p>
              <div className="text-xs text-gray-400">
                Created {new Date(collection.createdAt!).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
