import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}
interface UsersProvider {
  children: ReactNode
}
interface UsersContextType {
  user: User
  fetchUsers: () => Promise<void>
}

export const UsersContext = createContext({} as UsersContextType)

export function UsersProvider({ children }: UsersProvider) {
  const [user, setUser] = useState<User>({
    avatar_url: '',
    name: '',
    html_url: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users/walteralves10')
    setUser(response.data || {})
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const value = useMemo(
    () => ({
      user,
      fetchUsers,
    }),
    [user, fetchUsers],
  )

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
