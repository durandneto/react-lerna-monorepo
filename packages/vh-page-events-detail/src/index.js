import React, { useState }  from 'react'
import VHHighlightTitleCta from 'vh-highlight-title-cta'
import VHSimpleCard from 'vh-simple-card'
import Card from 'vh-card'
import VHImgHtml from 'vh-img-html'
import VHGallery from 'vh-gallery'
import VHFaq from 'vh-faq'
import VHFixedBar from 'vh-fixed-bar'
import VHImageTitleDescription from 'vh-image-title-description'
import VHTitleApplyButton from 'vh-title-apply-button'

import {
  PageContainer,
  CoverContainer,
  HowToJoinContainer,
  FaqContainer,
  Container,
 } from "./index.styles"

const VHPageEventsDetail = props => {

  const [showFixedBar, setShowFixedBar] = useState(true);
  const [userApplyingLoader, setUserApplyingLoader] = useState(false);

  return (
    <PageContainer>
      <VHFixedBar show={showFixedBar}>
        <VHTitleApplyButton
          title={`${props.page.title} ● ${props.page.subTitle}`}
          _cta={() => setUserApplyingLoader(true)}
          applied={props.user.applied}
          loading={ userApplyingLoader }
        />
      </VHFixedBar>
      <CoverContainer cover={props.page.cover}>
        <VHHighlightTitleCta
          title={props.page.title}
          subTitle={props.page.subTitle}
          color="white"
          applied={props.user.applied}
          loading={ userApplyingLoader }
          cta={
            {
              _callback: () => setUserApplyingLoader(true)
            }
          }
        />
      </CoverContainer>
      <Container>
      {
        props.cards.map((card, index) => (
          <VHSimpleCard
            key={`card-top-item-id${index}`}
            idle
            padding2
            title={card.title}
            description={card.description}
          />
        ))
      }
      </Container>
      <HowToJoinContainer>
        <Container>
          <VHHighlightTitleCta
            title={props.howToJoin.title}
            subTitle={props.howToJoin.subTitle}
            color="white"
            template2
            applied={props.user.applied}
            loading={ userApplyingLoader }
          />
          <Card padding2>
            <VHImageTitleDescription
              source={props.infos.apply.source}
              title={props.infos.apply.title}
              description={props.infos.apply.description}
              applied={props.user.applied}
              loading={ userApplyingLoader }
              withLine
              cta={
                {
                  label: "Apply",
                  _callback: () => setUserApplyingLoader(true)
                }
              }
            />
            {
              props.infos._html.map((info, index) => (
                <VHImgHtml
                  key={`content-html-item-id${index}`}
                  title={info.title}
                  source={info.source}
                  _html={info._html}
                  withLine
                />
              ))
            }
          </Card>
          <VHSimpleCard
            column
            error
            highlight
            padding2
            title="Important"
            description="The deadline to complete all 4 steps is January 31th. But hurry! The spots for the São Paulo Recruiting Mission are limited, and there might not be any left if you wait to complete the steps at the last minute."
          />
        </Container>
      </HowToJoinContainer>
        <VHGallery
          cover="http://via.placeholder.com/1420x796.png"
          items={props.gallery}
          title="Past Events in 2018"
        />
      <FaqContainer>
        <Container>
          <VHFaq
            tabs = { props.faq }
          />
        </Container>
      </FaqContainer>
      <CoverContainer template2 cover="http://via.placeholder.com/1440x551.png">
        <Card panel padding3>
          <VHHighlightTitleCta
            title={props.bottomCTA.title}
            subTitle={props.bottomCTA.subTitle}
            template2
            applied={props.user.applied}
            loading={ userApplyingLoader }
            cta={
              {
                _callback: () => setUserApplyingLoader(true)
              }
            }
          />
        </Card>
      </CoverContainer>
    </PageContainer>
  )
}

export default VHPageEventsDetail
