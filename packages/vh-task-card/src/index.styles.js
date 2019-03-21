import styled from 'styled-components'
import { DoneAllSharp } from '@material-ui/icons';

export const Container = styled.div`
    width: 240px;
    height: 205px;
    * {
        margin: 1px 0;
    }
    img {
        margin-bottom: 8px;
    }
    margin: 6px 0;
    ${({done}) => done ? (`
        svg {
            color: green;
        }
        width: 236px;
        border: 2px solid #41B809;
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
        height: 210px;
        margin: 0;
    `) : (`
        cursor: pointer;
        :hover * {
                background-color: #0675CE;
                color: #fff !important;
            }
        }
    `)}

`
