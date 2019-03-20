import styled from 'styled-components'


export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  ${({ noVideo }) => noVideo && `
    height: 336px;
    border-radius: 4px;
  `}
`

export const ControlsContainer = styled.div`
  position: absolute;
  display: flex;
  `

  export const AllowContainer = styled.div`
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  background: rgba(0,0,0,0.5);
  padding: 8px;
  margin: 4px;
`
