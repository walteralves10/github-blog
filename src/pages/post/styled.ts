import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18rem;
  /* margin-bottom: 10rem; */
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 54rem;
  margin-top: -4rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      ${(props) => props.theme.titleL}
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      color: ${(props) => props.theme.blue};

      a {
        ${(props) => props.theme.link}
        color: ${(props) => props.theme.blue};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      span {
        ${(props) => props.theme.link}
        cursor: pointer;
      }
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Content = styled.main`
  width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['base-text']};

  a {
    color: ${(props) => props.theme.blue};
  }

  code {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${(props) => props.theme['base-post']};
  }
`
