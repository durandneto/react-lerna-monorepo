import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const ImageObject = styled.div`
  box-sizing: border-box;
  width: 226px;
  height: 162px;
  border: 1px solid #51ABE4;
  border-radius: 8px;
  justify-content: center;
  background-size: cover;
  margin: 8px auto;

  &:hover {
    opacity: 0.8;
  }
  ${({ cover }) => (cover && `
    background-size: cover;
    background-image: url('${cover}');
  `)}
`;

export const TypographyTitle = styled(Typography)`
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 60px 0px;
  ${({ cover }) => (cover && `
    background-size: cover;
    background-image: url('${cover}');
  `)}
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
