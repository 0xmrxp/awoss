"use server";

import { searchRepositories } from "@/lib/github";

export async function searchRepos(formData: FormData) {
  const query = formData.get("query") as string;
  
  if (!query) return { repos: [] };

  try {
    const data = await searchRepositories({
      query: `${query} in:name,description`,
      perPage: 20,
    });
    
    return { repos: data.items || [] };
  } catch (error) {
    console.error("GitHub API error:", error);
    return { repos: [], error: "Failed to fetch repositories" };
  }
}