import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const CoverImage = styled(Grid)`
  height: 320px;
  ${({ source }) => (source && `
    background-image:url("${source}");
    background-size: cover;
    background-position: center;
    width: 100%;
  `)}
`

export const CountryFlag = styled(Grid)`
  width: 32px;
  height: 32px;
  background-color: silver;
  border-radius: 50%;
  ${({ source }) => (source && `
    background-image:url("${source}");
  `)}
`

export const HeaderContainer = styled(Grid)`
  max-width: 1280px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
`

export const IconTextContainer = styled(Grid)`
  display: flex;
  align-items: center;
`
