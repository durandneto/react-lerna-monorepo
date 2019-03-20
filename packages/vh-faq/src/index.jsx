import React, { Component } from 'react'
import { Button, Grid } from '@material-ui/core'
import { take } from 'ramda'

import VHText from 'vh-text'
import {
  Container, Header, Content, FaqContainer
} from './index.styles'

class Faq extends Component {
  state = {
    currentTab: {},
    showMore: false,
  }

  componentWillMount = () => {
    this.setState({ currentTab: this.props.tabs[0] })
  }

  handleSelect = tab => {
    this.setState({ currentTab: tab } )
  }

  handleShowMore = () => {
    const { showMore } = this.state;
    this.setState({ showMore: !showMore });
  }

  render() {
    const { tabs } = this.props
    const { currentTab, showMore } = this.state
    const list = showMore ? currentTab.content : take(4, currentTab.content)
    return (
      <FaqContainer primary={this.props.primary}>
        <Container>
          <Grid container>
            <Grid item sm={4}></Grid>
            <Grid item sm={8}>
              <VHText
                variant="h4"
                text="Frequently Asked Questions"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={3} xs={12}>
              <Header>
              {
                tabs.map((tab, index) => (
                  <div key={tab.title} onClick={() => this.handleSelect(tab)} style={{cursor: 'pointer', marginBottom: "8px"}}>
                    <VHText
                      color={tab.title === currentTab.title && "primary"}
                      variant="button"
                      text={ tab.title }
                      align="right"
                    />
                  </div>
                ))
              }
              </Header>
            </Grid>
            <Grid item sm={8}>
              <Content>
              {
                list.map(({ question, answer }) => (
                  <div key={question} style={{marginBottom: "24px"}}>
                    <div style={{marginBottom: "8px"}}>
                      <VHText
                        variant="subtitle2"
                        text={ question }
                      />
                    </div>
                    <VHText
                      variant="caption"
                      text={ answer }
                    />
                  </div>
                ))
              }
              {
                currentTab.content.length > 4 && (
                  <Button onClick={this.handleShowMore} color="primary">
                    { showMore ? 'Show less' : 'Show more'}
                  </Button>
                )
              }
              </Content>
            </Grid>
          </Grid>
        </Container>
      </FaqContainer>
    )
  }
}

export default Faq
