import React from 'react'
import {
  LinearProgress,
  Grid,
  Typography,
} from '@material-ui/core'

const  VHPRogress = props => {
  const [completed, setCompleted] = React.useState(0)
  const [currentSecond, setCurrentSecond] = React.useState(0)

  const start = () => {
    progress(new Date())
  }

  const progress = (startDate) => {
    const currentDate = new Date()
    const difference = (startDate - currentDate) / 1000
    if ( Math.abs(difference) < props.seconds ){
      requestAnimationFrame(()=>{
        setCompleted(Math.abs(difference) / props.seconds * 100)
        setCurrentSecond(Math.abs(difference))
        progress(startDate)
        if ( props.onChange )
          props.onChange({
            percentage: Math.abs(difference) / props.seconds * 100,
            currentSecond: Math.abs(difference),
            remainingSeconds: props.seconds - Math.abs(difference)
          })
      })
    } else {
      setCompleted(100)
      setCurrentSecond(props.seconds)
    }
  }

  React.useEffect(() => {
    if (props.start) {
      start()
    }
  }, [])

  return (
    <Grid container direction="column" alignItems="center" justify="center" direction="row">
      <div style={{width:'32px', display: 'flex', justifyContent: 'center'}}>
      <Typography variant="caption">
        {
          `${currentSecond.toFixed(0)}s`
        }
      </Typography>
        </div>
        <div style={{flex: '1'}}>
      <LinearProgress color={props.color || 'primary'} variant="determinate" value={completed} />
        </div>
        <div style={{width:'32px', display: 'flex', justifyContent: 'center'}}>
      <Typography variant="caption">
        {
          `${props.seconds}s`
        }
      </Typography>
      </div>
    </Grid>
  )
}

export default VHPRogress