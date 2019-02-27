import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHEventStepDetail from '.'


const currentEvent = {
    id:12,
    name:"string1111",
    country:"Brazil",
    steps:[
        {
            name:"Applied",
            passed:true,
            current:false,
            order:0,
            description:null,
            shortName:"Applied"
        },
        {
            name:"English & Code Verified",
            passed:true,
            current:false,
            order:1,
            description:null,
            shortName:"Verified"
        },
        {
            name:"VH Profile Screening",
            passed:true,
            current:false,
            order:2,
            description:null,
            shortName:"Profile"
        },
        {
            name:"Scheduling Call",
            passed:true,
            current:true,
            order:3,
            description:"Scheduling Call",
            shortName:"Schedule"
        },
        {
            name:"VH Screening Call",
            passed:true,
            current:false,
            order:5,
            description:null,
            shortName:"Call"
        },
        {
            name:"VH Pre-Selected",
            passed:true,
            current:false,
            order:6,
            description:null,
            shortName:"Pre-Selected"
        },
        {
            name:"Company Screening",
            passed:true,
            current:true,
            order:7,
            description:"Default message Company Screening",
            shortName:"Company"
        },
        {
            name:"Selected",
            passed:false,
            current:false,
            order:8,
            description:null,
            shortName:"Selected"
        },
        {
            name:"Keep Hacking",
            passed:false,
            current:false,
            order:9,
            description:"Default message from Keep hacking step",
            shortName:"Rejected"
        }
    ],
    city:"São Paulo",
    startDate:"2019-02-21T00:00:00",
    endDate:"2019-02-21T00:00:00",
    ended:false
}

const currentEventScheduleCall = {
    id:12,
    name:"string1111",
    country:"Brazil",
    steps:[
        {
            name:"Applied",
            passed:true,
            current:false,
            order:0,
            description:null,
            shortName:"Applied"
        },
        {
            name:"English & Code Verified",
            passed:true,
            current:false,
            order:1,
            description:null,
            shortName:"Verified"
        },
        {
            name:"VH Profile Screening",
            passed:true,
            current:false,
            order:2,
            description:null,
            shortName:"Profile"
        },
        {
            name:"Scheduling Call",
            passed:true,
            current:true,
            order:3,
            description:null,
            shortName:"Schedule"
        },
        {
            name:"VH Screening Call",
            passed:false,
            current:false,
            order:5,
            description:null,
            shortName:"Call"
        },
        {
            name:"VH Pre-Selected",
            passed:false,
            current:false,
            order:6,
            description:null,
            shortName:"Pre-Selected"},
            {name:"Company Screening",
            passed:false,
            current:false,
            order:7,
            description:null,
            shortName:"Company"
        },
        {
            name:"Selected",
            passed:false,
            current:false,
            order:8,
            description:null,
            shortName:"Selected"
        },
        {
            name:"Keep Hacking",
            passed:true,
            current:true,
            order:9,
            description:"Default message from Keep hacking step",
            shortName:"Rejected"
        }
    ],
    city:"São Paulo",
    startDate:"2019-02-21T00:00:00",
    endDate:"2019-02-21T00:00:00",
    ended:false
}
const currentEventCompanyScreening = {
    id:12,
    name:"string1111",
    country:"Brazil",
    steps:[
        {
            name:"Applied",
            passed:true,
            current:false,
            order:0,
            description:null,
            shortName:"Applied"
        },
        {
            name:"English & Code Verified",
            passed:true,
            current:false,
            order:1,
            description:null,
            shortName:"Verified"
        },
        {
            name:"VH Profile Screening",
            passed:true,
            current:false,
            order:2,
            description:null,
            shortName:"Profile"
        },
        {
            name:"Scheduling Call",
            passed:true,
            current:true,
            order:3,
            description:null,
            shortName:"Schedule"
        },
        {
            name:"VH Screening Call",
            passed:true,
            current:false,
            order:5,
            description:null,
            shortName:"Call"
        },
        {
            name:"VH Pre-Selected",
            passed:true,
            current:false,
            order:6,
            description:null,
            shortName:"Pre-Selected"
        },
        {
            name:"Company Screening",
            passed:true,
            current:true,
            order:7,
            description:"Default message Company Screening",
            shortName:"Company"
        },
        {
            name:"Selected",
            passed:false,
            current:false,
            order:8,
            description:null,
            shortName:"Selected"
        },
        {
            name:"Keep Hacking",
            passed:true,
            current:true,
            order:9,
            description:"Default message from Keep hacking step",
            shortName:"Rejected"
        }
    ],
    city:"São Paulo",
    startDate:"2019-02-21T00:00:00",
    endDate:"2019-02-21T00:00:00",
    ended:false
}

storiesOf('Components/EventStepDetail', module)

.add('Default enable', () => (
    <VHEventStepDetail event={currentEvent} message={{
        type:"success",
        message:"Successful application !!!, Your current step is:"
    }}
    onCloseMessage={action()}
    />
))

.add('Rejected on Scheduling Call', () => (
    <VHEventStepDetail event={currentEventScheduleCall} />
))

.add('Rejected on Company Screening', () => (
    <VHEventStepDetail event={currentEventCompanyScreening} />
))

