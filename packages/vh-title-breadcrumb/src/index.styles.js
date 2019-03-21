import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const Container = styled(Grid)`
    ::before {
        content: "<";
        font-size: 22px;
        color: #0675CE;
        position: absolute;
        left: -24px;
    }
`
