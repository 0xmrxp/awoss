import { createCollection } from "../actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function NewCollectionPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Create New Collection</h1>
      
      <form action={createCollection} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Collection Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="e.g. Best React Libraries"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="What is this collection about?"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
          />
          <label htmlFor="isPublic" className="text-sm text-gray-700">
            Make this collection public
          </label>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Create Collection
          </button>
          <a
            href="/collections"
            className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
