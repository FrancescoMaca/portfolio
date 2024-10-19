'use client'
import { useEffect, useState } from "react";
import { Commit, fetchGitHubCommits } from "./commit-finder";
import { formatRelativeTime } from "@/components/utils/helpers";

export function CommitDropdown({ expanded }: { expanded: boolean }) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  
  async function loadCommits() {
    try {
      setLoading(true)
      const fetchedCommits = await fetchGitHubCommits();
      setCommits(fetchedCommits);
    } catch (err) {

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCommits();
  }, []);

  if (loading) {
    return (
      <div className="animate-spin">
        <img src="/svg/ide/loading.svg" alt="Loading icon" title="" />
      </div>
    )
  }

  return (
    <div className={`flex flex-col overflow-hidden ${expanded ? 'h-full' : 'h-0'} transition-all duration-500`}>
      <ul className="overflow-y-auto">
        {commits.map((commit: Commit, index: number) => {
          const [title, ...messageParts] = commit.commit.message.split('\n').map(part => part.trim())
          return (
            <li key={commit.sha || index}>
              <CommitEntry 
                sha={commit.sha}
                commitMessage={messageParts.join('\n').trim()}
                commitTitle={title}
                author={commit.author?.login || commit.commit.author.name}
                date={new Date(commit.commit.author.date)}
              />
            </li>
          )}
        )}
      </ul>
    </div>
  )
}

interface CommitEntryProps {
  sha: string;
  commitTitle: string;
  commitMessage: string;
  author: string;
  date: Date;
}

function CommitEntry({ sha, commitTitle, author, commitMessage, date }: CommitEntryProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <div className={`flex flex-col py-1 px-4 hover:bg-hover-dark`}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <div className="flex items-center">
          <img src={`/svg/ide/chevron-${expanded ? 'down' : 'right'}.svg`}
            alt={expanded ? "Chevron down" : "Chevron right"}
            title=""
            width={20}
            className="min-w-[20px]"
          />
          <span className="ml-2 text-text-normal whitespace-nowrap overflow-hidden text-ellipsis block">
            {commitTitle[0].toUpperCase() + commitTitle.substring(1)}
          </span>
          <span className="ml-2 text-text-unfocused whitespace-nowrap overflow-hidden text-ellipsis block">
            • {formatRelativeTime(date)}
          </span>
        </div>
        {
          hovered &&
          <div className="absolute right-0 top-0 h-full flex items-center justify-center">
            <img src="/svg/ide/globe.svg" alt="Globe Icon" title="" width={24}
              className="p-0.5 rounded-md bg-hover-dark hover:brightness-125"
              onClick={() => {
                open(`https://github.com/FrancescoMaca/portfolio/commit/${sha}`)
              }}
            />
          </div>
        }
      </div>
      {
        expanded &&
        <div className="flex flex-col gap-1 p-2 my-2 ml-7 bg-dark text-text-normal shadow-[0px_0px_11px_0px_#353535] rounded-md transition-all">
          <div className="flex gap-2">
            <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
              {commitTitle[0].toUpperCase() + commitTitle.substring(1)}
            </span>
            <a href={`https://github.com/${author}`} target="_blank"
              className="w-fit text-white hover:underline hover:text-accent whitespace-nowrap overflow-hidden text-ellipsis block text-[.75rem]"
            >
              [{author}]
            </a>
          </div>
          <span className="text-white py-1 px-2 rounded-md bg-hover-dark">
            {
              !commitMessage || commitMessage.length === 0 ?
                'No messages attached to this commit' : commitMessage
            }
          </span>
        </div>
      }
    </div>
  )
}
/**
 * 
 * <div className={`overflow-hidden ${expanded ? 'h-full' : 'h-0'} transition-all duration-700`}></div>
 */