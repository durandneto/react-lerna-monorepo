import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageObject,
  TypographyTitle,
  Container,
  Content,
  Gallery,
} from './index.styles';

const VHGallery = props => {
  const { items } = props;

  return (
    <Container cover={props.cover}>
      <Content>
        <TypographyTitle variant="h4">
          {
            props.title
          }
        </TypographyTitle>
        <Gallery>
          {
            items.map(item => (
              <ImageObject
                key={`gallery-image-item-id-${item}`}
                cover={item}
              />
            ))
          }
        </Gallery>
      </Content>
    </Container>
  );
};

VHGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default VHGallery;
