import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { Info, Bio, Container, Profile, Content } from './styled'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IssuesContext } from '../../contexts/issues-context'

export function Post() {
  const params = useParams()
  const { issue, fetchUniqueIssue, handleNavigate } = useContext(IssuesContext)

  useEffect(() => {
    if (params.id) {
      fetchUniqueIssue(params.id)
    }
  }, [params.id, fetchUniqueIssue])

  return (
    <Container>
      <Profile>
        <Bio>
          <header>
            <div onClick={() => handleNavigate('/')}>
              <CaretLeft />
              <span>VOLTAR</span>
            </div>
            <div>
              <a href={issue.html_url} target="_blank" rel="noreferrer">
                VER NO GITHUB
              </a>
              <ArrowUpRight />
            </div>
          </header>

          <h1>{issue.title}</h1>

          <Info>
            <div>
              <GithubLogo weight="fill" size={18} />
              <span>{issue.user?.login}</span>
            </div>
            <div>
              <Calendar weight="fill" size={18} />
              <span>
                {issue.created_at &&
                  formatDistanceToNow(new Date(issue.created_at), {
                    locale: ptBR,
                  })}
              </span>
            </div>
            <div>
              <ChatCircle weight="fill" size={18} />
              <span>{issue.comments} comentários</span>
            </div>
          </Info>
        </Bio>
      </Profile>

      <Content>
        <Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
      </Content>
    </Container>
  )
}
