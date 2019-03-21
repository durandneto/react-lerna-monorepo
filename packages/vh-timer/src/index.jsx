import React from 'react'
import VHTime from 'vh-time'

import {
  TimerContainer
} from './index.styles'

const VHTimer = props => {
  const [seconds, setSeconds] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [days, setDays] = React.useState(0)
  const [months, setMonths] = React.useState(0)
  const [currentDate, setCurrent] = React.useState(0)

  const start = (endDate) => {
    requestAnimationFrame(()=>{
      const currentDate = new Date()
      if (currentDate >= endDate) {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setDays(0)
        setMonths(0)
        props.onEndTime()
      } else {
        setCurrent(currentDate)
        let diffSeconds = Math.abs(currentDate.getSeconds() - 60)
        if ( diffSeconds === 60 ) {
          diffSeconds = 0
        }

        let diffMinutes = endDate.getMinutes() - ( currentDate.getMinutes() - 60)
        if (currentDate.getMinutes() < endDate.getMinutes() ) {
          diffMinutes = parseInt(endDate.getMinutes()) - currentDate.getMinutes()
        }
        let diffHours = endDate.getHours() - currentDate.getHours()

        if ( diffMinutes > 0) {
          diffMinutes -=1
        }

        if ( diffMinutes >= 60 ) {
          diffMinutes = 0
        }

        const diffDays = endDate.getDate() - currentDate.getDate()
        diffHours = parseInt(diffHours) + ( parseInt(diffDays) * 24)

        const diffMonths = endDate.getMonth() - currentDate.getMonth()

        if ( diffHours > 0) {
          diffHours -=1
        }

        if ( props.debugger ) {
          console.log(
            {
              "Seconds": diffSeconds,
              "Minutes": diffMinutes,
              "Hours": diffHours,
              "Days": diffDays,
              "Months": diffMonths
            }
          )
        }

        setSeconds(diffSeconds)
        setMinutes(diffMinutes)
        setHours(diffHours)
        setDays(diffDays)
        setMonths(diffMonths)
        start(endDate)
      }
    })
  }

  React.useEffect(() => {
    start(new Date(props.endDate))
  }, [])

  return (
    <React.Fragment>
      {
        props.debugger && (
          <React.Fragment>
            <div>
              {
                props.endDate
              }
            </div>
            <div>
              {
                currentDate.toString()
              }
            </div>
            <div>
              {months} -
              {days} -
              {hours} -
              {minutes} -
              {seconds}
            </div>
          </React.Fragment>
        )
      }
    <TimerContainer>
      <VHTime number={hours} text="hours" />
      <VHTime number={minutes} text="min" />
      <VHTime number={seconds} text="sec" />
    </TimerContainer>
  </React.Fragment>
  )
}

export default VHTimer
