import { Star, GitFork, Calendar } from "lucide-react";

interface RepoCardProps {
  repo: {
    id: number;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    html_url: string;
    license: {
      spdx_id: string;
    } | null;
    language: string | null;
  };
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            className="font-semibold text-lg hover:underline"
          >
            {repo.full_name}
          </a>
          {repo.description && (
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {repo.description}
            </p>
          )}
        </div>
        
        {repo.license && (
          <span className="text-xs px-2 py-1 bg-gray-100 rounded">
            {repo.license.spdx_id}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
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
    </div>
  );
}