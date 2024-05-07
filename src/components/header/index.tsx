import { useLocation } from 'react-router-dom'
import { Container } from './styled'

export function Header() {
  const { pathname } = useLocation()

  return (
    <Container>
      {pathname.includes('post') && <img src="/src/assets/logo.svg" alt="" />}
    </Container>
  )
}
