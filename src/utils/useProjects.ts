import { useState, useEffect } from "react";
import { config } from "../config";

export interface ProjectItem {
  id: number | string;
  title: string;
  category: string;
  technologies: string;
  image: string;
  github?: string;
  live?: string;
  description: string;
}

const CACHE_KEY = "github_projects_cache_v1";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache to stay well within GitHub API rate limits

function formatTitle(name: string): string {
  return name
    .split(/[-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function useProjects(): ProjectItem[] {
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    // 1. Try to load from localStorage cache immediately
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch {
      // Fallback
    }
    return config.projects as ProjectItem[];
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubRepos() {
      const username = config.social.github || "gourab354";
      const ignoredRepos = new Set([
        "portfolio",
        username.toLowerCase(),
      ]);

      try {
        // Fetch public repositories sorted by updated
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          return;
        }

        const repos: any[] = await response.json();
        if (!Array.isArray(repos)) return;

        // Map existing static config projects by repo name or URL
        const existingByRepoName = new Map<string, ProjectItem>();
        for (const proj of config.projects as ProjectItem[]) {
          if (proj.github) {
            const parts = proj.github.replace(/\/+$/, "").split("/");
            const repoName = parts[parts.length - 1].toLowerCase();
            existingByRepoName.set(repoName, proj);
          }
        }

        const mergedProjects: ProjectItem[] = [];
        const seenRepoNames = new Set<string>();

        // 1. First, include projects from GitHub (so newly pushed repos appear automatically)
        for (const repo of repos) {
          const repoNameLower = repo.name.toLowerCase();

          // Skip ignored repos (like the portfolio itself or profile README)
          if (ignoredRepos.has(repoNameLower) || repo.fork) {
            continue;
          }

          seenRepoNames.add(repoNameLower);

          // If project exists in config.ts, use its enriched description, category, and image
          const existing = existingByRepoName.get(repoNameLower);
          if (existing) {
            mergedProjects.push({
              ...existing,
              live: repo.homepage || existing.live,
              github: repo.html_url || existing.github,
            });
          } else {
            // BRAND NEW REPO: automatically parse title, language, tech stack, etc.
            const techList: string[] = [];
            if (repo.language) techList.push(repo.language);
            if (Array.isArray(repo.topics) && repo.topics.length > 0) {
              techList.push(
                ...repo.topics.map(
                  (t: string) => t.charAt(0).toUpperCase() + t.slice(1)
                )
              );
            }

            const techString =
              techList.length > 0
                ? techList.join(", ")
                : repo.language || "Open Source";

            mergedProjects.push({
              id: repo.id || repo.name,
              title: formatTitle(repo.name),
              category: repo.language ? `${repo.language} Development` : "Software / Engineering",
              technologies: techString,
              image: "/images/eie.png",
              github: repo.html_url,
              live: repo.homepage || undefined,
              description:
                repo.description ||
                `An open source repository by ${username} on GitHub.`,
            });
          }
        }

        // 2. Also ensure any config projects not in public repo list are retained
        for (const proj of config.projects as ProjectItem[]) {
          if (proj.github) {
            const parts = proj.github.replace(/\/+$/, "").split("/");
            const repoName = parts[parts.length - 1].toLowerCase();
            if (!seenRepoNames.has(repoName)) {
              mergedProjects.push(proj);
            }
          } else {
            mergedProjects.push(proj);
          }
        }

        if (isMounted && mergedProjects.length > 0) {
          setProjects(mergedProjects);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                timestamp: Date.now(),
                data: mergedProjects,
              })
            );
          } catch {
            // Ignore quota errors
          }
        }
      } catch (err) {
        console.warn("Could not fetch GitHub repos automatically:", err);
      }
    }

    fetchGitHubRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return projects;
}
