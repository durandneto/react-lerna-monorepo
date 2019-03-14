import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHHighlightTitleCta from '.'

storiesOf('Components/HighlightTitleCta', module)

.add('VHHighlightTitleCta Defatult template 1', () => (
  <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
  />
))

.add('VHHighlightTitleCta Color white template 1', () => (
  <div style={{backgroundColor:"#0675CE"}}>
    <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    color="white"
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
  />
  </div>
))

.add('VHHighlightTitleCta Color primary template 1', () => (
  <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    color="primary"
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
  />
))
.add('VHHighlightTitleCta Defatult template 2', () => (
  <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
    template2
  />
))

.add('VHHighlightTitleCta Color white template 2', () => (
  <div style={{backgroundColor:"#0675CE"}}>
    <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    color="white"
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
    template2
  />
  </div>
))

.add('VHHighlightTitleCta Color primary template 2', () => (
  <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    color="primary"
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
    template2
  />
))

.add('VHHighlightTitleCta Color primary template 2 with applied user', () => (
  <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    color="primary"
    applied={true}
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
    template2
  />
))

.add('VHHighlightTitleCta Color primary template 2 with loading', () => (
  <VHHighlightTitleCta
    title="Leap Calgary"
    subTitle="April 8th - 10th,  2019"
    color="primary"
    loading
    cta={
      {
        label: "Apply",
        _callback: action()
      }
    }
    template2
  />
))

