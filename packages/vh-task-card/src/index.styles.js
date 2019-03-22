import styled from 'styled-components'
import { DoneAllSharp } from '@material-ui/icons';

export const Container = styled.div`
    img {
        margin-bottom: 8px;
    }
    ${({done}) => done ? (`
        svg {
            color: green;
        }
        border: 2px solid #41B809;
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
    `) : (`
        cursor: pointer;
        :hover * {
                background-color: #0675CE;
                color: #fff !important;
            }
        }
    `)}

`
