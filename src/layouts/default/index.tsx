import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Header } from '../../components/header'

export function Default() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
