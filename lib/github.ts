import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Optional: for higher rate limits
});

export async function searchRepositories(params: {
  query: string;
  perPage?: number;
  page?: number;
  sort?: string;
  order?: string;
}) {
  const { query, perPage = 20, page = 1, sort = "stars", order = "desc" } = params;

  const response = await octokit.search.repos({
    q: query,
    per_page: perPage,
    page,
    sort,
    order,
  });

  return response.data;
}

export async function getRepository(owner: string, repo: string) {
  const response = await octokit.repos.get({
    owner,
    repo,
  });
  return response.data;
}