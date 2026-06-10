import { Star, GitFork, Calendar, Scale } from "lucide-react";
import { AddToCollection } from "./add-to-collection";

interface RepoCardProps {
  repo: {
    id: number;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    license: {
      spdx_id?: string;
      name?: string;
    } | null;
    html_url: string;
    language: string | null;
  };
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="p-6 border rounded-xl hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold truncate max-w-[70%]">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {repo.full_name}
          </a>
        </h3>
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-medium">
          <Scale className="w-3 h-3" />
          {repo.license?.spdx_id || repo.license?.name || "No License"}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
        {repo.description || "No description provided."}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
        {repo.language && (
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-black" />
            {repo.language}
          </div>
        )}
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          {repo.stargazers_count.toLocaleString()}
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          {repo.forks_count.toLocaleString()}
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(repo.updated_at).toLocaleDateString()}
        </div>
      </div>

      <div className="pt-4 border-t mt-auto">
        <AddToCollection repoFullName={repo.full_name} repoId={repo.id} />
      </div>
    </div>
  );
}
