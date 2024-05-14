import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18rem;
  margin-bottom: 10rem;
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 54rem;
  margin-bottom: 4.5rem;
  margin-top: -4rem;
  padding: 1rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
  }
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
      color: ${(props) => props.theme.blue};

      a {
        ${(props) => props.theme.link}
        color: ${(props) => props.theme.blue};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
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
`

export const SearchPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span:first-child {
      ${(props) => props.theme.titleS}
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      ${(props) => props.theme.textS}
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    border-radius: 6px;
    border: none;
    padding: 12px 16px;
    color: ${(props) => props.theme['base-text']};

    background: ${(props) => props.theme['base-input']};
    &::placeholder {
      ${(props) => props.theme.textM}
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const ContainerList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2rem;
  padding-top: 3rem;
`

export const List = styled.div`
  width: 26rem;
  height: 16rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  cursor: pointer;
  outline: 2px solid transparent;
  transition: outline 0.2s;

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:first-child {
      width: 15rem;
      ${(props) => props.theme.titleM}
    }
    span:last-child {
      ${(props) => props.theme.textS}
    }
  }

  p {
    position: relative;
    overflow: hidden;
  }
`
