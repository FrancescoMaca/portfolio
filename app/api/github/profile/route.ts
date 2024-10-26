import axios from "axios"
import { NextResponse } from "next/server";

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `Bearer ${process.env.GH_TOKEN}`,
  },
});

export async function GET() {
  try {
    const [userResponse, repoResponse, branchesResponse] = await Promise.all([
      githubApi.get('/users/FrancescoMaca'),
      githubApi.get('/repos/FrancescoMaca/portfolio'),
      githubApi.get('/repos/FrancescoMaca/portfolio/branches'),
    ]);

    return NextResponse.json({
      userProfile: userResponse.data,
      repoInfo: repoResponse.data,
      branches: branchesResponse.data,
    });
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profile data' },
      { status: 500 }
    );
  }
}