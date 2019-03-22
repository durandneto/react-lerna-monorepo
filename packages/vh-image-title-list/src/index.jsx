import React from 'react'
import { Grid } from "@material-ui/core"
import { FiberManualRecord } from "@material-ui/icons"
import VHText  from 'vh-text'
import VHImg  from 'vh-img'

const VHImageTitleDescription = props => (
  <Grid container>
    {
      props.data.source && (
        <Grid item xs={12} sm={2} md={2} alignItems="flex-start" justify="center" container>
          <VHImg source={props.data.source} />
        </Grid>
      )
    }
    <Grid container direction="row" item xs={12} sm={10} md={10}>
      <Grid item xs={12} >
        <div style={{display: 'flex', marginBottom: '16px'}}>
          <VHText variant="h5" text={props.data.title}/>
        </div>
      </Grid>
      <Grid container direction="column" item xs={12}>
        <Grid item xs={12}>
          {
            props.data.list.map((item, index) => {
              return item.bullet ? (
                <div style={{display: 'flex', marginBottom: '8px'}} key={`VHImageTitleDescription-item${index}`}>
                  <FiberManualRecord style={{ fontSize: 8, marginTop: '3px', marginRight: '8px' }} color="disabled"  />
                  <VHText key={`VHImageTitleDescription-item${index}`} variant="caption" text={item.text}  />
                </div>
              ) : (
                <div style={{display: 'flex', marginBottom: '8px'}} key={`VHImageTitleDescription-item${index}`}>
                  <VHText variant="caption" text={item.text}/>
                </div>
              )
            })
          }
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default VHImageTitleDescription
