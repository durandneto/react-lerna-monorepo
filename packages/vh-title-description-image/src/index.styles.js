import styled from 'styled-components'


export const Container = styled.div`
  padding: 64px 0;
`

export const DescriptionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SourceContainer = styled.div`
  height: 100vh;
  width: 100%;

  ${({cover}) => cover && `
    background-image: url('${cover}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  `}

`;

export default DescriptionContainer
