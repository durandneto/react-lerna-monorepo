import React, { Component } from 'react'

import { FixedScrollBar, FixedTopBar } from './index.styles'

let FixedBar = FixedTopBar
class VHFixedBar extends Component {
  constructor(props) {
    super(props)
    this.fixedBar = React.createRef()
    this.state = {
      show: false,
      prevScrollpos: 0,
    }
  }
  componentDidMount() {
    this.setState({
      prevScrollpos: window.pageYOffset
    })
    window.addEventListener('scroll', this.handleShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleShow)
  }

  handleShow = () => {
    if ( this.props.template2 ) {
      this.handleShowFixedBarOnScroll()
    } else {
      this.handleShowFixedBar()
    }
  }

  handleShowFixedBar = () => {
    if (window.pageYOffset >= 200) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  handleShowFixedBarOnScroll = () => {
    const currentScrollPos = window.pageYOffset
    const bar = this.fixedBar.current
    if (this.state.prevScrollpos > currentScrollPos) {
      bar.style.top = "0"
    } else {
      bar.style.top = "-100px"
    }
    this.setState({
      prevScrollpos: currentScrollPos
    })
  }

  render = () => {
    if ( this.props.template2 ) {
      FixedBar = FixedScrollBar
    } else {
      FixedBar = FixedTopBar
    }
    return (
      <FixedBar
        ref={this.fixedBar}
        show={this.state.show}
        size2={this.props.size2}
        size3={this.props.size3}
        size4={this.props.size4}
      >
        {
          this.props.children
        }
      </FixedBar>
    )
  }
}

export default VHFixedBar
