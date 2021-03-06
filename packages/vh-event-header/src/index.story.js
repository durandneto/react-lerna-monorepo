import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHEventHeader from '.'

const event = {
    applied: false,
    city: "São Paulo",
    country: "Brazil",
    cover: "http://via.placeholder.com/1280x320.jpg",
    endApplicationDate: "2019-02-22T00:00:00",
    endDate: "2019-03-24T00:00:00",
    eventType: 0,
    flag: "http://via.placeholder.com/32x32.jpg",
    id: 1,
    isOnline: false,
    name: "São Paulo Recruiting Mission",
    possibleToApply: false,
    promoted: false,
    slug: "sao-paulo-recruiting-mission-2019",
    startApplicationDate: "2019-01-01T00:00:00",
    startDate: "2019-03-23T00:00:00",
    state: "São Paulo",
    subtitle: "March 23th & March 24th 2019",
    theCandidates: "<p>VanHack is looking for candidates with 3 or more years of professional experience.</p><p>Candidates also need to have advanced or fluent English and be able to attend the Recruiting Mission event on March 23rd and 24th in person.</p><p>Most importantly, candidates must be willing to get a job in Canada and/or Europe, and to relocate in the first semester of 2019.</p>",
    theEvent: "<p>VanHack is bringing to São Paulo on March 23rd and 24th a Recruiting Mission for Tech Talents who want to fuel the growth of Canada's and Europe's tech market. Some of the best companies in North America and Europe will be attending the fair, in hopes of filling over 100 positions.</p><p>This is an amazing chance to do face-to-face interviews with international companies and land a job abroad. Don't miss it!</p>",
    thumb: "http://via.placeholder.com/300x152.jpg",
}
const eventPossibleApply = {
    applied: false,
    city: "São Paulo",
    country: "Brazil",
    cover: "http://via.placeholder.com/1280x320.jpg",
    endApplicationDate: "2019-02-22T00:00:00",
    endDate: "2019-03-24T00:00:00",
    eventType: 0,
    flag: "http://via.placeholder.com/32x32.jpg",
    id: 1,
    isOnline: false,
    name: "São Paulo Recruiting Mission",
    possibleToApply: true,
    promoted: false,
    slug: "sao-paulo-recruiting-mission-2019",
    startApplicationDate: "2019-01-01T00:00:00",
    startDate: "2019-03-23T00:00:00",
    state: "São Paulo",
    subtitle: "March 23th & March 24th 2019",
    theCandidates: "<p>VanHack is looking for candidates with 3 or more years of professional experience.</p><p>Candidates also need to have advanced or fluent English and be able to attend the Recruiting Mission event on March 23rd and 24th in person.</p><p>Most importantly, candidates must be willing to get a job in Canada and/or Europe, and to relocate in the first semester of 2019.</p>",
    theEvent: "<p>VanHack is bringing to São Paulo on March 23rd and 24th a Recruiting Mission for Tech Talents who want to fuel the growth of Canada's and Europe's tech market. Some of the best companies in North America and Europe will be attending the fair, in hopes of filling over 100 positions.</p><p>This is an amazing chance to do face-to-face interviews with international companies and land a job abroad. Don't miss it!</p>",
    thumb: "http://via.placeholder.com/300x152.jpg",
}
const eventApplied = {
    applied: true,
    city: "São Paulo",
    country: "Brazil",
    cover: "http://via.placeholder.com/1280x320.jpg",
    endApplicationDate: "2019-02-22T00:00:00",
    endDate: "2019-03-24T00:00:00",
    eventType: 0,
    flag: "http://via.placeholder.com/32x32.jpg",
    id: 1,
    isOnline: false,
    name: "São Paulo Recruiting Mission",
    possibleToApply: true,
    promoted: false,
    slug: "sao-paulo-recruiting-mission-2019",
    startApplicationDate: "2019-01-01T00:00:00",
    startDate: "2019-03-23T00:00:00",
    state: "São Paulo",
    subtitle: "March 23th & March 24th 2019",
    theCandidates: "<p>VanHack is looking for candidates with 3 or more years of professional experience.</p><p>Candidates also need to have advanced or fluent English and be able to attend the Recruiting Mission event on March 23rd and 24th in person.</p><p>Most importantly, candidates must be willing to get a job in Canada and/or Europe, and to relocate in the first semester of 2019.</p>",
    theEvent: "<p>VanHack is bringing to São Paulo on March 23rd and 24th a Recruiting Mission for Tech Talents who want to fuel the growth of Canada's and Europe's tech market. Some of the best companies in North America and Europe will be attending the fair, in hopes of filling over 100 positions.</p><p>This is an amazing chance to do face-to-face interviews with international companies and land a job abroad. Don't miss it!</p>",
    thumb: "http://via.placeholder.com/300x152.jpg",
}

storiesOf('Components/Header/Events', module)

.add('VHEventHeader With a pasted event', () => (
    <VHEventHeader
        data={event}
        onApply={action()}
        onDetail={action()}
    />
))
.add('VHEventHeader With a non-user', () => (
    <VHEventHeader
        data={eventPossibleApply}
        onApply={action()}
        onDetail={action()}
    />
))
.add('VHEventHeader With an applied user', () => (
    <VHEventHeader
        data={eventApplied}
        onApply={action()}
        onDetail={action()}
    />
))

