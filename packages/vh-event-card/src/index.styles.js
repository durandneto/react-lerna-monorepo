import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const CoverImage = styled(Grid)`
  ${({ source }) => (source && `
    background-image:url("${source}");
    height: 152px;
    background-size: cover;
    background-position: center;
  `)}
`

export const CardContainer = styled(Grid)`
    padding: 8px;
`

export const DetailContainer = styled(Grid)`
    padding: 16px 8px;
`

export const FlagContainer = styled(Grid)`
    position: relative;
    width: 100%;
`

export const InfoContainer = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    width: 100%;
    height: 324px;
    overflow: hidden;
`

export const CountryFlag = styled(Grid)`
  width: 32px;
  height: 32px;

  background-color: silver;
  border-radius: 50%;

  ${({ source }) => (source && `
    background-image:url("${source}");
  `)}

  ${({ card }) => (card && `
    position: absolute;
    top: -16px;
    right: 0;
    margin-right: 8px;
  `)}
`