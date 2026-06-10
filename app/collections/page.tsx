import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">My Collections</h1>
          <p className="text-gray-600 mt-1">Organize and share your favorite open source projects</p>
        </div>
        <Link 
          href="/collections/new"
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Create New Collection
        </Link>
      </div>

      <div className="grid gap-4">
        {/* Placeholder for collections */}
        <div className="border rounded-lg p-6 text-center text-gray-500">
          You don't have any collections yet. Create your first one!
        </div>
      </div>
    </div>
  );
}