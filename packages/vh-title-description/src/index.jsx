import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
// import PropTypes from 'prop-types'

import VHText from 'vh-text'
import VHLine from 'vh-line'
import VHApplyButton from 'vh-apply-button'

const VHTitleDescription = (props) => {
  return (
  <React.Fragment>
    <Grid container direction={props.direction ? props.direction : 'row' }>
      <Grid item xs={12} sm={props.direction && props.direction === 'column' ? 12 : 3  }>
        {
          props.title ? <VHText
          align={props.alignCenter ? "center" : props.alignStart ? "flex-start" : props.alignRight ? 'right'  : "flex-start"}
          variant={props.type === "Highlight" ? 'h6' : "h5"} text={props.title} /> : ''
        }
      </Grid>
      <Grid item xs={12} sm={props.direction && props.direction === 'column' ? 12 : 9} >
        <VHText
          variant={props.type === "Highlight" ? 'caption' : "body2"}
          align={props.alignCenter ? "center" : props.alignStart ? "flex-start" : props.alignRight ? 'right'  : "flex-start"}
          text={ props.description }
        />
      </Grid>
    </Grid>
    {
      props.cta && (
        <React.Fragment>
          <Hidden smUp implementation="css">
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems={props.alignCenter ? "center" : props.alignStart ? "flex-start" : props.alignRight ? 'flex-end'  : "flex-end"}
            >
              <Grid item xs={12} style={{width:'100%', margin:'16px 0'}}>
                <VHApplyButton
                  fullWidth
                  applied={props.applied || false}
                  loading={props.loading}
                  _cta={props.cta._callback}
                  label={props.cta.label}
                  large={props.template2 && "large" }
                />
              </Grid>
            </Grid>
          </Hidden>
          <Hidden only={['xs']} implementation="css">
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems={props.alignCenter ? "center" : props.alignStart ? "flex-start" : props.alignRight ? 'flex-end'  : "flex-end"}
            >
              <Grid item style={{margin:'16px 0'}}>
                <VHApplyButton
                  applied={props.applied || false}
                  loading={props.loading}
                  _cta={props.cta._callback}
                  label={props.cta.label}
                  large={props.template2 && "large" }
                />
            </Grid>
            </Grid>
          </Hidden>
        </React.Fragment>
      )
    }

    {
      props.withLine && (
        <Grid container>
          <Grid item xs={12} sm={props.direction && props.direction === 'column' ? 12 : 3  }></Grid>
          <Grid item xs={12} sm={props.direction && props.direction === 'column' ? 12 : 9} >
            <VHLine />
          </Grid>
        </Grid>
      )
    }
  </React.Fragment>
)}

// VHTitleDescription.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.string,
//   ),
// }


export default VHTitleDescription
