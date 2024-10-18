'use client'
import { useEffect, useState } from "react"
import { getGitHubProfileAndRepoInfo, GitHubBranch, GitHubUser, GitHubRepo } from "./commit-finder"
import { SourceControlDropdown } from "./dropdown-entry"
import { formatDate, formatRelativeTime } from "@/components/utils/helpers"

export function RemotesDropdown() {

  const [repoInfo, setRepoInfo] = useState<GitHubRepo>(null)
  const [userInfo, setUserInfo] = useState<GitHubUser>(null)
  const [branches, setBranches] = useState<GitHubBranch[]>(null)
  const [loading, isLoading] = useState<boolean>(true)
  const [expanded, isExpanded] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      isLoading(true)
      const { userProfile, repoInfo, branches } = await getGitHubProfileAndRepoInfo()
      setRepoInfo(repoInfo)
      setUserInfo(userProfile)
      setBranches(branches)
      isLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="animate-spin">
        <img src="/svg/ide/loading.svg" alt="Loading icon" title="" />
      </div>
    )
  }

  return (
    <div className="cursor-pointer">
      <div className="flex px-5 py-1 gap-2 overflow-hidden text-text-normal hover:bg-hover-dark"
        onClick={() => isExpanded(!expanded)}
      >
        <img src={`/svg/ide/chevron-${expanded ? 'down' : 'right'}.svg`} alt="" width={20}
          className="min-w-[20px]"
        />
        <img src={userInfo.avatar_url} alt="Avatar User" title="" width={20}
          className="min-w-[20px]"
        />
        <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
          <span className="text-white">{branches[0].name}</span>
          {` ⇄ GitHub • FrancescoMaca/portfolio`}
        </span>
      </div>
      {
        expanded &&
        branches.map((branch, index) => 
          <div key={index} className={`flex gap-2 py-1 px-2 ml-7
            border-l border-l-border-input hover:bg-hover-dark
            ${index === branches.length - 1 ? ' rounded-bl-xl mb-2' : ''}
          `}>
            <img src="/svg/ide/git-merge.svg" alt="Git Branch Icon" title=""
              width={20}
              className="rotate-180 scale-x-[-1] min-w-[20px]"
            />
            <span>{branch.name}</span>
            <span>{formatRelativeTime(new Date(repoInfo.updated_at))}</span>
          </div>
        )
      }
    </div>
  )
}