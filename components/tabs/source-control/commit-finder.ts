import axios from 'axios';

export interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  author: {
    login: string;
  } | null;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
}

export interface GitHubRepo {
  updated_at: string;
}

export interface GitHubBranch {
  name: string;
}

export async function fetchGitHubCommits(): Promise<Commit[]> {
  const apiUrl = `https://api.github.com/repos/FrancescoMaca/portfolio/commits`;
  let allCommits: Commit[] = [];
  let page = 1;

  try {
    while (true) {
      const response = await axios.get(apiUrl, {
        params: {
          per_page: 100, // Max allowed by GitHub API
          page: page,
        },
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });
      
      const commits: Commit[] = response.data;
      allCommits = allCommits.concat(commits);

      if (commits.length < 100) {
        break; // No more pages
      }

      page++;
    }

    return allCommits;
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
}

export async function getGitHubProfileAndRepoInfo() {
  const userResponse = await axios.get(`https://api.github.com/users/FrancescoMaca`);
  const userProfile: GitHubUser = userResponse.data;

  const repoResponse = await axios.get(`https://api.github.com/repos/FrancescoMaca/portfolio`);
  const repoInfo: GitHubRepo = repoResponse.data;

  const branchesResponse = await axios.get(`https://api.github.com/repos/FrancescoMaca/portfolio/branches`);
  const branches: GitHubBranch[] = branchesResponse.data;

  return {
    userProfile,
    repoInfo,
    branches,
  };
}
