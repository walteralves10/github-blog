import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'

export interface Issue {
  body: string
  title: string
  created_at: string
  number: number
}
interface IssuesContextType {
  issues: Issue[]
  handleIssue: (number: number) => void
  fetchIssues: () => Promise<void>
  fetchSearchIssues: (query: string, username: string) => Promise<void>
}
interface IssuesProvider {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProvider) {
  const navigate = useNavigate()
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async () => {
    const response = await api.get('repos/walteralves10/github-blog/issues')
    setIssues(response.data)
  }, [])

  const fetchSearchIssues = useCallback(
    async (query: string, username: string) => {
      const response = await api.get(
        `search/issues?q=${query}%20repo:${username}/github-blog`,
      )
      setIssues(response.data.items)
    },
    [],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const handleIssue = useCallback(
    (number: number) => {
      navigate(`post/${number}`)
    },
    [navigate],
  )

  const value = useMemo(
    () => ({
      issues,
      handleIssue,
      fetchIssues,
      fetchSearchIssues,
    }),
    [issues, handleIssue, fetchIssues, fetchSearchIssues],
  )

  return (
    <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>
  )
}
