import styled from 'styled-components'

export const FixedBar = styled.div`
  display: none;
  ${({ show }) => show && `
    position: fixed;
    width: 98%;
    top: 0;
    z-index: 9;
    background-color: #fff;
    padding: 4px;
    transition: opacity .15s ease-in-out;
    max-height: 48px;
    height: 48px;
    overflow: hidden;
    box-shadow: inset 0 -1px 0 0 #B2BBC1;
    display: flex;
    align-items: center;
  `}

  ${({template2}) => template2 && `
      max-height: 56px;
      height: 56px;
  `}

  ${({template3}) => template3 && `
      max-height: 64px;
      height: 64px;
  `}

  ${({template4}) => template4 && `
      max-height: 72px;
      height: 72px;
  `}

`