export default function NewCollectionPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Collection</h1>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Collection Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-lg" 
            placeholder="e.g. Best React Libraries 2026"
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description (optional)</label>
          <textarea 
            className="w-full px-4 py-2 border rounded-lg h-24"
            placeholder="A collection of my favorite React libraries and tools"
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="public" className="w-4 h-4" />
          <label htmlFor="public" className="text-sm">Make this collection public</label>
        </div>

        <button 
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
        >
          Create Collection
        </button>
      </div>
    </form>
  );
}