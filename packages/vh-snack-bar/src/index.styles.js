import styled from 'styled-components'
import { Button } from '@material-ui/core'
import SnackbarContent from '@material-ui/core/SnackbarContent'

export const VHSnackbarContent = styled(SnackbarContent)`

    ${({ error }) => (error && `
        background: red !important;
    `)}

    ${({ success }) => (success && `
        background: green !important;
    `)}

    ${({ warning }) => (warning && `
        background: yellow !important;
    `)}
`

export const VHSnackbarMessageContent = styled.span`
    display: flex;
    align-items: center;
`

export default VHSnackbarContent
