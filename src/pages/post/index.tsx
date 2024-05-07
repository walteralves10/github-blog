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

const markdown = `
Programming languages all have built-in data structures, but these
often differ from one language to another. This article attempts to
list the built-in data structures available in JavaScript and what
properties they have. These can be used to build other data
structures. Wherever possible, comparisons with other languages are
drawn.

[Dynamic typing](https://www.rocketseat.com.br/ignite)

JavaScript is a loosely typed and dynamic language. Variables in
JavaScript are not directly associated with any particular value type,
and any variable can be assigned (and re-assigned) values of all
types:

<code>
  let foo = 42; // foo is now a number

  foo = ‘bar’; // foo is now a string

  foo = true; // foo is now a boolean
</code>
`

export function Post() {
  return (
    <Container>
      <Profile>
        <Bio>
          <header>
            <div>
              <CaretLeft />
              <span>VOLTAR</span>
            </div>
            <div>
              <a href="#">VER NO GITHUB</a>
              <ArrowUpRight />
            </div>
          </header>

          <h1>JavaScript data types and data structures</h1>

          <Info>
            <div>
              <GithubLogo weight="fill" size={18} />
              <span>cameronwll</span>
            </div>
            <div>
              <Calendar weight="fill" size={18} />
              <span>Há 1 dia</span>
            </div>
            <div>
              <ChatCircle weight="fill" size={18} />
              <span>5 comentários</span>
            </div>
          </Info>
        </Bio>
      </Profile>

      <Content>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </Content>
    </Container>
  )
}
