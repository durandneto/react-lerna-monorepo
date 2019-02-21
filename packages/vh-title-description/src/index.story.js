import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import VHTitleDescription from '.'


storiesOf('Molecules/Title Description/Default', module)
  .add('Single Item description', () => (
    <VHTitleDescription
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    />
  ))


  .add('Multiple Item description', () => (
    <React.Fragment>
      <VHTitleDescription
        title="The Event"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        />
      <VHTitleDescription
        title="The Candidate"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        />
      <VHTitleDescription
        title="With three words"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        />
    </React.Fragment>
  ))

  .add('Multiple Item without title', () => (
    <React.Fragment>
      <VHTitleDescription
        title="The Event"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        />
      <VHTitleDescription
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        />
      <VHTitleDescription
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        />
    </React.Fragment>
  ))


  storiesOf('Molecules/Title Description/Column', module)
  .add('Single Item description ', () => (
    <VHTitleDescription
    direction="column"
    title="The Event"
    description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    />
  ))

  .add('Single Item description centered', () => (
    <VHTitleDescription
      alignCenter
      direction="column"
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    />
  ))

  .add('Multiple Item description ', () => (
    <React.Fragment>
      <VHTitleDescription
        direction="column"
        title="The Event"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
      <VHTitleDescription
        direction="column"
        title="The Candidate"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
      <VHTitleDescription
        direction="column"
        title="With three words"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
    </React.Fragment>
  ))

  .add('Multiple Item without title ', () => (
    <React.Fragment>
      <VHTitleDescription
        direction="column"
        title="The Event"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
      <VHTitleDescription
        direction="column"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
      <VHTitleDescription
        direction="column"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
    </React.Fragment>
  ))

  storiesOf('Molecules/Title Description/With CTA', module)
    .add('Column  with CTA and type="Highlight"', () => (
      <VHTitleDescription
        direction="column"
        title="The Event"
        type="Highlight"
        alignStart
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        cta={
          {
            label: "Apply to the Event",
            _callback:action()
            }
          }
        />
    ))
    .add('Column  with CTA', () => (
      <VHTitleDescription
      direction="column"
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
          }
        }
        />
    ))

    .add('Column  right with CTA', () => (
      <VHTitleDescription
      alignRight
      direction="column"
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
          }
        }
        />
    ))

    .add('Column centered with CTA', () => (
      <VHTitleDescription
      alignCenter
      direction="column"
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
          }
        }
        />
    ))

    .add('Column align start with CTA', () => (
      <VHTitleDescription
      alignStart
      direction="column"
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
          }
        }
        />
    ))

    .add('Default with CTA', () => (
      <VHTitleDescription
        title="The Event"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        cta={
          {
            label: "Apply to the Event",
            _callback:action()
          }
        }
       />
    ))

  .add('Multiple Item without title with CTA ', () => (
    <React.Fragment>
      <VHTitleDescription
        direction="column"
        title="The Event"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
      <VHTitleDescription
        direction="column"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      />
      <VHTitleDescription
        direction="column"
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        cta={
          {
            label: "Apply to the Event",
            _callback:action()
          }
        }
      />
    </React.Fragment>
  ))

  .add('With Line and CTA ', () => (
    <React.Fragment>
      <VHTitleDescription
        description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
        withLine
        title="The Event"
        cta={
          {
            label: "Apply to the Event",
            _callback:action()
          }
        }
      />
    </React.Fragment>
  ))