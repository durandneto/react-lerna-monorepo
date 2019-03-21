import styled from 'styled-components'

export const Container = styled.div`
  width: min-content;
  display: flex;
  white-space: nowrap;
  `

export const HomeContainer = styled.div`
  width: min-content;
  cursor: pointer;
  :hover {
    opacity: 0.75
  }
`

export const TitleContainer = styled.div`
  width: min-content;
  display: flex;
  align-items: center;
  ::before {
    content: ">";
    margin: 0 4px;
    font-size: 8px;
    color: #777D80;
  }
`

