import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const CardContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 8px 0;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
  padding: 8px;

  ${({ panel }) => (panel && `
    border-radius: 0px;
    margin: 0;
  `)}

  ${({ padding2 }) => (padding2 && `
    padding: 24px;
  `)}

  ${({ padding3 }) => (padding3 && `
    padding: 64px 24px;
  `)}

  ${({ idle, padding2 }) => (idle && `
    padding: 4px 16px;
    box-shadow: inset 8px 0 0 0 #0675CE, 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
    ${padding2 && `
      padding: 16px 32px;
    `}
  `)}

  ${({ error, padding2 }) => (error && `
    padding: 4px 16px;
    box-shadow: inset 8px 0 0 0 red, 0 0 6px 0 rgba(0,0,0,0.1), 0 2px 12px 0 rgba(0,0,0,0.1);
    ${padding2 && `
      padding: 16px 32px;
    `}
  `)}
`;