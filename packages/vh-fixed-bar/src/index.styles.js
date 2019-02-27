import styled from 'styled-components'

export const FixedTopBar = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  height: 0px;
  ${({ show }) => show && `
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
    background-color: #fff;
    padding: 4px;
    max-height: 48px;
    height: 48px;
    overflow: hidden;
    box-shadow: inset 0 -1px 0 0 #B2BBC1;
    display: flex;
    align-items: center;
    visibility: visible;
    opacity: 1;
  `}

  ${({size2}) => size2 && `
      max-height: 56px;
      height: 56px;
  `}

  ${({size3}) => size3 && `
      max-height: 64px;
      height: 64px;
  `}

  ${({size4}) => size4 && `
      max-height: 72px;
      height: 72px;
  `}
`
export const FixedScrollBar = styled.div`
  background-color: #fff;
  padding: 4px;
  position: fixed;
  top: -72px;
  width: 100%;
  display: block;
  transition: top 0.3s;
  z-index: 9;
  overflow: hidden;
  box-shadow: inset 0 -1px 0 0 #B2BBC1;

  ${({size2}) => size2 && `
      max-height: 56px;
      height: 56px;
  `}

  ${({size3}) => size3 && `
      max-height: 64px;
      height: 64px;
  `}

  ${({size4}) => size4 && `
      max-height: 72px;
      height: 72px;
  `}
`