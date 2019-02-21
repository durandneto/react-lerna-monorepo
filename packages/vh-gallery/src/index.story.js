import React from 'react'
import { storiesOf } from '@storybook/react'

import VHGallery from '.'
const GridImages = [
  "http://via.placeholder.com/226x160.png",
  "http://via.placeholder.com/226x161.png",
  "http://via.placeholder.com/226x162.png",
  "http://via.placeholder.com/226x163.png",
  "http://via.placeholder.com/226x164.png",
  "http://via.placeholder.com/226x165.png",
  "http://via.placeholder.com/226x166.png",
  "http://via.placeholder.com/226x168.png",
];

storiesOf('Components/Gallery', module)

.add('default', () => (
  <VHGallery
    cover="http://via.placeholder.com/1420x796.png"
    items={GridImages}
    title="Past Events in 2018"
  />
))

