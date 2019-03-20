import React from 'react'
import { Grid } from '@material-ui/core'
import VHTitleDescriptionAction from 'vh-title-description-action'
import VHText from 'vh-text'
import { DescriptionContainer, SourceContainer, Container } from './index.styles'

const VHTitleDescriptionImage = props => (
  <Container>
    <Grid container alignItems="center">
      <Grid item md={12} style={{paddingBottom:'64px'}} >
        <VHText text={props.title} variant="h3" align="center" />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item sm={6} xs={12}>
        <DescriptionContainer>
          {
            props.data.map( item => (
              <div>
              <VHTitleDescriptionAction
                title={item.title}
                description={item.description}
                template2
              />
              </div>
              ))
            }
        </DescriptionContainer>
      </Grid>
      <Grid item sm={6} xs={12}>
        <SourceContainer cover={props.source} />
      </Grid>
    </Grid>
  </Container>
)

export default VHTitleDescriptionImage
