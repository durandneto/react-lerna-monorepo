import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F2F6F9;
`
export const Container = styled.div`
  max-width: 1000px;
  align-self: center;
`

export const FaqContainer = styled.div`
  padding: 64px 8px 32px;
  align-self: center;
`

export const HowToJoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0675CE;
  padding: 64px 8px 32px;
`
export const CoverContainer = styled.div`
  height: 320px;
  display: flex;
  align-items: center;
  flex: 1;
  ${({ cover }) => (cover && `
    background-image: url(${cover}});
    background-size: cover;
    background-position: 37% 0%;
  `)}
  ${({ template2 }) => (template2 && `
    padding: 152px 0;
  `)}
`

export default PageContainer