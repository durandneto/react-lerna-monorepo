import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHFaq from '.'

const generalInformation = [
  {
    question: 'What is the São Paulo Recruiting Mission and when will it take place?',
    answer: 'It is an event where top Canadian and European companies will interview tech talents in person, in hopes of filling over 100 positions. The event will take place during March 23rd and March 24th of 2019 in downtown São Paulo.',
  },
  {
    question: 'Do I have to live in São Paulo or in Brazil to attend the event?',
    answer: 'No, you don\'t, but you must be able to be present at the location on the dates of the event. VanHack will unfortunately not cover transportation costs for candidates coming from other cities/countries.',
  },
  {
    question: 'Which companies will be at the São Paulo Recruiting Mission, and how many candidates will be hired?',
    answer: 'Information about the companies will be disclosed to the selected candidates before the event, but we expect to have between 10 and 15 Canadian and European companies interviewing candidates, and over 100 offers being made.',
  },
  {
    question: 'Do I have to pay anything to apply to or participate in the São Paulo Recruiting Mission?',
    answer: 'No, the event is 100% free.',
  },
  {
    question: 'How will the São Paulo Recruiting Mission work? Will I have to attend both days, or just one?',
    answer: 'The agenda for the event is still being defined, but you might need to attend both days of the event. This information will be available to the selected candidates before the event.',
  },
  {
    question: 'In which countries/cities are the companies located?',
    answer: 'This information will be available soon.',
  },
  {
    question: 'If I am selected, will I leave the São Paulo Recruiting Mission with a job offer?',
    answer: 'We cannot guarantee that. Companies will have full autonomy to make offers to the candidates they select.',
  },
  {
    question: 'Will my interview in the São Paulo Recruiting Mission be the last step of the interview process?',
    answer: 'It depends on the company. You might still need to do other interviews (remotely) with companies after the Recruiting Mission.',
  },
  {
    question: 'Will I receive feedback during the São Paulo Recruiting Mission?',
    answer: 'Any feedback provided will be given after the event.',
  },
  {
    question: 'I was not selected to participate in previous missions/I did not receive an offer in previous missions. Can I still apply to this one?',
    answer: 'Sure! Everyone can apply and will be considered.',
  },
  {
    question: 'Will all companies in the São Paulo Recruiting Mission sponsor visas and provide relocation packages to hired candidates?',
    answer: 'All companies will provide visa sponsorship to the hired candidates, but we cannot guarantee all of them will provide relocation packages.',
  },
  {
    question: 'Will Recruiting Missions happen only in Brazil?',
    answer: 'No. We also have plans to do Recruiting Fairs in other countries in 2019.',
  },
  {
    question: 'I have read the whole FAQ, but I still have a question. Who can I speak to?',
    answer: 'Please send an email to contact@vanhack.com. You will get a response within 48 business hours.',
  },
];

const selectionProcess = [
  {
    question: 'What happens after I complete all 4 steps of the selection process?',
    answer: 'We will perform an in-depth review of the applications of all candidates who complete the 4 steps, and select the best ones based on Profile, English and Code Verification results. These candidates will be matched to the available positions, and their resumes will be sent to the companies for their evaluation. Companies will then pick the candidates they would like to interview, and we will begin to prepare these candidates for the event.',
  },
  {
    question: 'If I don\'t complete one of these steps, will I still be considered?',
    answer: 'Unfortunately, you will not. Only candidates who follow the four steps will be considered.',
  },
  {
    question: 'I did well on all steps of the VanHack screening process, but I wasn\'t selected. Why not?',
    answer: 'After we complete our screening process, candidates go through the companies\' screening processes. Candidates may still be eliminated at this last step.',
  },
  {
    question: 'What if I am not selected for the São Paulo Recruiting Mission?',
    answer: 'By completing these four steps, you have significantly increased your chances of getting hired abroad. We will continue to consider you for our open positions and for our next events.',
  },
];

const profileStandards = [
  {
    question: 'Why do I need to update my profile and make sure it\'s complete? Isn\'t my resume enough?',
    answer: 'Our Artificial Intelligence will use the data on your profile to match you to the available jobs at the Recruiting Mission. This is why you need to make sure your profile is complete and up to date.',
  },
  {
    question: 'So why do I have to provide a link to my resume in the VanHack template?',
    answer: 'Companies may only review the resumes we send them instead of reviewing the VanHack profiles. This is why you need to make sure your resume is linked to your profile, is up to date, and is in the VanHack template.',
  },
  {
    question: 'I am not sure if my profile is up to the VanHack Standards or not. Can someone check?',
    answer: 'If you follow the steps outlined, your profile will be up to our standards. If you are a premium member, you can schedule a resume consultation and have a VanHack specialist review it.',
  },
];

const englishVerification = [
  {
    question: 'Where can I book the English Verification?',
    answer: 'You can book it here: http://lingocentre.com/vanhack-2018/. ',
  },
  {
    question: 'Is there any important detail I need to know about the English Verification?',
    answer: 'Yes: make sure you do not miss your appointment (no-show) or cancel it at the last minute (within 24 hours of the appointment). If you need to reschedule it, please do so more than 24 hours in advance.',
  },
  {
    question: 'What if I miss my English Verification appointment/cancel it within 24 hours of the appointment?',
    answer: 'You will only have one more chance to schedule and complete your English Verification. If you miss that appointment or cancel it at the last minute for the second time, you will be eliminated from the selection process.',
  },
  {
    question: 'I am an English native speaker. Do I need to complete the English Verification?',
    answer: 'All candidates need to complete the English Verification, regardless of their nationality or native language.',
  },
  {
    question: 'I completed my English Verification over 6 months ago. Do I need to complete the English Verification again?',
    answer: 'Yes, all candidates who have been verified over 6 months ago need to complete the English Verification again, except if your English Verification was done with LingoCentre. ',
  },
  {
    question: 'I have taken IELTS/TOEFL recently. Can I send you my test results instead of completing the English Verification?',
    answer: 'We don\'t accept test results. All candidates need to complete the English Verification.',
  },
  {
    question: 'I have lived in an English speaking country before. Do I need to complete the English Verification?',
    answer: 'All candidates need to complete the English Verification.',
  },
  {
    question: 'Do I need to inform VanHack that I have completed my English Verification?',
    answer: 'No, unless your English level hasn\'t been updated within 48 hours after you complete the call. In this case, please send an e-mail to verification@vanhack.com.',
  },
  {
    question: 'What if my English level is not “Advanced” or “Fluent”?',
    answer: 'While you will not be considered for this Recruiting Mission, you will still be considered for all our other jobs. If you would like to improve your English level, VanHack Premium can help you.',
  },
];

const codeVerification = [
  {
    question: 'In which skills can I be verified?',
    answer: [
      'You can request to be verified in the following skills: C, C++, C#, Kotlin, Java, Java: Hibernate, Java: Spring Boot, JavaScript: HTML/CSS, JavaScript: Angular, JavaScript: AngularJS, JavaScript: Node, JavaScript: React, Objective-C, Perl, PHP, Python, Python: Django, Ruby, Ruby: Rails, Scala, Swift, DBA, DevOps, QA. You can select up to three skills to be tested in (be mindful that this means completing three tests in the same period of time).',
      'You can use your own code style and programming logic in the test. Most tests include a role-based assessment to evaluate your skills in a real-world scenario. You can read more about it here: https://blog.hackerrank.com/new-role-based-assessments/',
    ],
  },
  {
    question: 'Where will I complete the Code Verification?',
    answer: 'You will complete the Code Verification on HackerRank\'s platform. To get familiarized with their coding environment, try their Sample Test. You can also read their FAQ here: https://www.hackerrank.com/tests/info/faq. ',
  },
  {
    question: 'When can I complete the Code Verification?',
    answer: 'Every Wednesday, we will assign tests to a list of candidates. You will have 7 days to complete the test. Further instructions will be provided in the email with the test link.',
  },
  {
    question: 'How long does it normally take to complete a Code Verification test?',
    answer: 'That depends on the candidate\'s skills and experience; however, we estimate that the average candidate will take between 5 and 10 hours to complete the test for each skill.',
  },
  {
    question: 'What if I don\'t submit my Code Verification test within the given time?',
    answer: 'If you don\'t submit your test by the deadline, you will fail the test. You may be granted an extension of the deadline if you communicate us in advance and justify your need for an extension. If you miss the deadline again, you will be eliminated from the selection process.',
  },
  {
    question: 'Will my code be manually evaluated? Will I get feedback on my test?',
    answer: 'Your code may be submitted to the companies so they can review it. This means you should do your best. But, unfortunately, due to the large volume of tests submitted, we won\'t be able to give individual feedback to candidates.',
  },
  {
    question: 'I feel like I didn\'t do well on my Code Verification. Can I retake the test?',
    answer: 'You will be able to retake it three months later. This means you won\'t be considered for the São Paulo Recruiting Mission, but may be considered for our open jobs and future events.',
  },
  {
    question: 'I have another question about the Code Verification. Who can I speak to?',
    answer: 'If your question isn\'t answered on this FAQ, please e-mail stefanie+code@vanhack.com. You will get a response within 48 business hours.',
  },
];

const faqContent = [
  { title: 'GENERAL INFORMATION', content: generalInformation },
  { title: 'SELECTION PROCESS', content: selectionProcess },
  { title: 'PROFILE STANDARDS', content: profileStandards },
  { title: 'ENGLISH VERIFICATION', content: englishVerification },
  { title: 'CODE VERIFICATION', content: codeVerification },
];



storiesOf('Components/Faq', module)

.add('VHFaq Default', () => (
  <VHFaq
    tabs = { faqContent }
  />
))


