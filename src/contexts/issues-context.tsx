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
  comments?: number
  html_url?: string
  user?: {
    login: string
  }
}
interface IssuesContextType {
  issues: Issue[]
  handleNavigate: (url: string) => void
  fetchIssues: () => Promise<void>
  fetchSearchIssues: (query: string, username: string) => Promise<void>
  issue: Issue
  fetchUniqueIssue: (id: string) => Promise<void>
}
interface IssuesProvider {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProvider) {
  const navigate = useNavigate()
  const [issues, setIssues] = useState<Issue[]>([])

  const [issue, setIssue] = useState<Issue>({
    body: '',
    title: '',
    created_at: '',
    number: 0,
    comments: 0,
    html_url: '',
    user: {
      login: '',
    },
  })

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

  const fetchUniqueIssue = useCallback(async (id: string) => {
    const response = await api.get(
      `repos/walteralves10/github-blog/issues/${id}`,
    )
    setIssue(response.data)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const handleNavigate = useCallback(
    (url: string) => {
      navigate(url)
    },
    [navigate],
  )

  const value = useMemo(
    () => ({
      issues,
      handleNavigate,
      fetchIssues,
      fetchSearchIssues,
      issue,
      fetchUniqueIssue,
    }),
    [
      issues,
      handleNavigate,
      fetchIssues,
      fetchSearchIssues,
      issue,
      fetchUniqueIssue,
    ],
  )

  return (
    <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>
  )
}
