import axios from "axios";

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

export interface GitHubProfile {
  userProfile: GitHubUser;
  repoInfo: GitHubRepo;
  branches: GitHubBranch[];
}


export async function fetchGitHubCommits(): Promise<Commit[]> {
  try {
    const response = await axios('/api/github/commits');
    if (response.status !== 200) {
      throw new Error('Failed to fetch commits');
    }
    return response.data
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
}

export async function getGitHubProfileAndRepoInfo(): Promise<GitHubProfile> {
  try {
    const response = await axios('/api/github/profile');
    if (response.status !== 200) {
      throw new Error('Failed to fetch profile');
    }
    return response.data
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}
