import { RepoCard } from "@/components/repo-card";

export default async function ReposPage() {
  // Temporary static data for now
  const sampleRepos = [
    {
      id: 1,
      full_name: "vercel/next.js",
      description: "The React Framework",
      stargazers_count: 125000,
      forks_count: 27000,
      updated_at: "2026-06-09T10:00:00Z",
      html_url: "https://github.com/vercel/next.js",
      license: { spdx_id: "MIT" },
      language: "TypeScript",
    },
    {
      id: 2,
      full_name: "facebook/react",
      description: "The library for web and native user interfaces",
      stargazers_count: 228000,
      forks_count: 47000,
      updated_at: "2026-06-08T15:30:00Z",
      html_url: "https://github.com/facebook/react",
      license: { spdx_id: "MIT" },
      language: "JavaScript",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Browse Repositories</h1>
          <p className="text-gray-600 mt-1">Discover open source projects by license and quality</p>
        </div>
        
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search repositories..." 
            className="px-4 py-2 border rounded-lg w-80"
          />
          <button className="px-6 py-2 bg-black text-white rounded-lg">
            Search
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {sampleRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}