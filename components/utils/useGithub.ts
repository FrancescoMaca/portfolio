import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useGithubCommits() {
  const { data, error, isLoading } = useSWR('/api/github/commits', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    commits: data,
    isLoading,
    isError: error
  };
}

export function useGithubProfile() {
  const { data, error, isLoading } = useSWR('/api/github/profile', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    profile: data,
    isLoading,
    isError: error
  };
}