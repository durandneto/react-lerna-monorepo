import React from 'react'
import { Grid } from '@material-ui/core'
import VHText from 'vh-text'
import VHApplyButton from 'vh-apply-button'

import {
  CoverImage,
  CountryFlag,
  CardContainer,
  InfoContainer,
  FlagContainer,
  DetailContainer,
} from './index.styles'


const VHEventCard = props => {
  return (
    <CardContainer
      container
      item
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <InfoContainer>
        <Grid item>
          <CoverImage
            source={props.data.thumb}
          />
        </Grid>
        <FlagContainer item>
          <CountryFlag card source={props.data.flag}/>
        </FlagContainer>
        <DetailContainer
          container
          direction="column"
        >
          <Grid item>
            <VHText variant="h6" materialColor="textPrimay" text={props.data.name} />
          </Grid>
          <Grid item container>
            <VHText variant="body1"  materialColor="textSecondary" text={`${props.data.subtitle}`}/>
          </Grid>
          <Grid item container>
            {
              !props.data.isOnline && "local"
            }
            {
              props.data.isOnline && "online"
            }
            <VHText variant="body1" materialColor="textSecondary" text={` - ${props.data.city}`}/>
            <VHText variant="body1" materialColor="textSecondary" text={` - ${props.data.country}`}/>
          </Grid>
          <Grid item container alignItems="center">
            <VHText variant="subtitle1" text="Application date: " />
            <VHText variant="caption" text={props.data.startApplicationDate}/>
          </Grid>
          <Grid
            item
            container
            justify="flex-end"
            alignItems="flex-end"
          >
            {
              props.data.possibleToApply
              && props.data.applied && (
                <VHApplyButton
                  label="See application"
                  _cta={props.onDetail}
                  large
                  outline
                />
              )
            }
            {
              props.data.possibleToApply
              && !props.data.applied && (
                <VHApplyButton
                  _cta={props.onApply}
                  large
                />
              )
            }
          </Grid>
        </DetailContainer>
      </InfoContainer>
    </CardContainer>
  )
}

export default VHEventCard
