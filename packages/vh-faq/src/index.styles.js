import styled from 'styled-components'

export const Header = styled.div`
  padding: 8px 16px;
  min-width: 200px;
`
export const Content = styled.div`
  padding: 8px 16px;
  border-left: 1px solid #0675CE;
`
export const FaqContainer = styled.div`
  ${({ primary }) => (primary && `
    background-color: #F2F6F9;
  `)}
  padding: 64px 8px 32px;
  flex: 1;
  justify-content: center;
  display: flex;
`
export const Container = styled.div`
  max-width: 1000px;
  align-self: center;
`