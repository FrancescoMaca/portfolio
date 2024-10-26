// /app/api/github/commits/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `Bearer ${process.env.GH_TOKEN}`,
  },
});

export async function GET() {
  try {
    let allCommits: string[] = [];
    let page = 1;

    while (true) {
      const response = await githubApi.get('/repos/FrancescoMaca/portfolio/commits', {
        params: {
          per_page: 100,
          page: page,
        },
      });
      
      const commits = response.data;
      allCommits = allCommits.concat(commits);

      if (commits.length < 100) {
        break;
      }

      page++;
    }

    return NextResponse.json(allCommits);
  } catch (error) {
    console.error('Error fetching commits:', error);
    return NextResponse.json(
      { error: 'Failed to fetch commits' },
      { status: 500 }
    );
  }
}