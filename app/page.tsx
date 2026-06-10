export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          AWOSS
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Discover, curate, and manage the best open source repositories
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Browse Repositories
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            Create Collection
          </button>
        </div>
      </div>
    </main>
  );
}