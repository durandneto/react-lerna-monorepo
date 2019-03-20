import React from 'react'
import { Grid } from '@material-ui/core'
import { CoverImage, CountryFlag } from './index.styles'
import VHText from 'vh-text'
import VHApplyButton from 'vh-apply-button'

import {
  HeaderContainer,
} from './index.styles'

const VHEventHeader = props => (
    <HeaderContainer container>
      <Grid item container>
        <CoverImage
          source={props.data.cover}
          />
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{margin: '16px'}}
        spacing={16}
        >
        <Grid item xs={2} sm={1} md={1} lg={1} container alignItems="center">
          <CountryFlag source={props.data.flag} />
        </Grid>
        <Grid item container xs={10} sm={11} md={11} lg={11} alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={3} >
            <VHText variant="h6" materialColor="textPrimary" text={props.data.name} />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={7} container justify="space-between">
            <VHText variant="subtitle2" materialColor="textSecondary" text={`${props.data.city} - ${props.data.country}`} />
            <VHText variant="subtitle2" materialColor="textPrimary" text={props.data.subtitle} />
            <VHText variant="subtitle2" materialColor="textSecondary" text={"Application deadline:"} />
            <VHText materialColor="textPrimary" text={props.data.endDate} />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2} container justify="flex-end">
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
        </Grid>
      </Grid>
    </HeaderContainer>
)

export default VHEventHeader
