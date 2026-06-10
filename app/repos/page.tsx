"use client";

import { useState } from "react";
import { searchRepos } from "./actions";
import { RepoCard } from "@/components/repo-card";
import { Search, Loader2 } from "lucide-react";

export default function ReposPage() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append("query", query);
      const result = await searchRepos(formData);
      
      if (result.error) {
        setError(result.error);
      } else {
        setRepos(result.repos);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Repositories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search through millions of open source projects on GitHub. 
          Filter by license, stars, or language to find exactly what you need.
        </p>
      </div>

      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search repositories (e.g. 'nextjs', 'react license:mit')"
            className="w-full pl-12 pr-24 py-4 border-2 rounded-2xl focus:border-black outline-none transition-all text-lg shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search"}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl mb-8 text-center">
          {error}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
          ))}
        </div>
      ) : repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : query && !loading ? (
        <div className="text-center py-20 text-gray-500">
          No repositories found for "{query}". Try a different search term.
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-3xl">
          <p className="text-gray-500">Enter a keyword above to start exploring.</p>
        </div>
      )}
    </div>
  );
}
