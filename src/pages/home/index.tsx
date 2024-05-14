import { ArrowUpRight, Buildings, GithubLogo, Users } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import {
  Container,
  Profile,
  Info,
  Bio,
  SearchPost,
  List,
  ContainerList,
} from './styled'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { debounce } from 'lodash'
import { UsersContext } from '../../contexts/users-context'
import { Issue, IssuesContext } from '../../contexts/issues-context'

export function Home() {
  const { user } = useContext(UsersContext)
  const { issues, fetchSearchIssues, handleIssue } = useContext(IssuesContext)

  const debouncedOnChange = debounce(handleSearch, 500)

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    fetchSearchIssues(e.target.value, user.login)
  }

  return (
    <Container>
      <Profile>
        <img src={user.avatar_url} alt="" />
        <Bio>
          <header>
            <h1>{user.name}</h1>
            <div>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                GITHUB
              </a>
              <ArrowUpRight />
            </div>
          </header>

          <p>{user.bio}</p>

          <Info>
            <div>
              <GithubLogo size={18} />
              <span>{user.login}</span>
            </div>
            <div>
              <Buildings size={18} />
              <span>{user.company}</span>
            </div>
            <div>
              <Users size={18} />
              <span>{user.followers} seguidores</span>
            </div>
          </Info>
        </Bio>
      </Profile>

      <SearchPost>
        <div>
          <span>Publicações</span>
          <span>{issues.length} publicações</span>
        </div>
        <input
          onChange={debouncedOnChange}
          type="search"
          placeholder="Buscar conteúdo"
        />
      </SearchPost>

      <ContainerList>
        {issues.map((issue: Issue) => (
          <List key={issue.number} onClick={() => handleIssue(issue.number)}>
            <div>
              <span>{issue.title}</span>
              <span>
                {issue.created_at &&
                  formatDistanceToNow(new Date(issue.created_at), {
                    locale: ptBR,
                  })}
              </span>
            </div>
            <p>{issue.body}</p>
          </List>
        ))}
      </ContainerList>
    </Container>
  )
}
