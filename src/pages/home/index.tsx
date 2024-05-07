import { ArrowUpRight, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  Container,
  Profile,
  Info,
  Bio,
  SearchPost,
  List,
  ContainerList,
} from './styled'

export function Home() {
  return (
    <Container>
      <Profile>
        <img src="/src/assets/avatar.svg" alt="" />
        <Bio>
          <header>
            <h1>Cameron Williamson</h1>
            <div>
              <a href="#">GITHUB</a>
              <ArrowUpRight />
            </div>
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <Info>
            <div>
              <GithubLogo size={18} />
              <span>cameronwll</span>
            </div>
            <div>
              <Buildings size={18} />
              <span>Rocketseat</span>
            </div>
            <div>
              <Users size={18} />
              <span>32 seguidores</span>
            </div>
          </Info>
        </Bio>
      </Profile>

      <SearchPost>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>
        <input type="search" placeholder="Buscar conteúdo" />
      </SearchPost>

      <ContainerList>
        <List>
          <div>
            <span>JavaScript data types and data structures</span>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </List>
        <List>
          <div>
            <span>JavaScript data types and data structures</span>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </List>
        <List>
          <div>
            <span>JavaScript data types and data structures</span>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </List>
        <List>
          <div>
            <span>JavaScript data types and data structures</span>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </List>
        <List>
          <div>
            <span>JavaScript data types and data structures</span>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </List>
        <List>
          <div>
            <span>JavaScript data types and data structures</span>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </List>
      </ContainerList>
    </Container>
  )
}
