import React, {Component} from 'react'
import {PortalWithState} from 'react-portal'
import {ItemsContainer, AppHeader} from './UI'
import MyMagicHatContainer from 'react-magic-hat'
import * as Components from './components/'

export default class Demo extends Component {
  state = {
    isAnimating: false,
    isOpen: false
  }

  renderFrame = ({id, page, activePage, state, actions}) => {
    let extraProps = {
      isActive: activePage === page,
      isAnimating: this.state.isAnimating
    }
    // console.log('Components', Components)
    const Page = id ? Components[id] : Components.Start

    return <Page {...extraProps} {...state} actions={actions} />
  }

  render() {
    return (
      <PortalWithState closeOnEsc>
        {({openPortal, closePortal, isOpen, portal}) => {
          const handleOpenPortal = cb => {
            this.setState({isOpen: true})
            setTimeout(openPortal, 300)
          }

          const onStartAnimation = frames => {
            this.setState({isAnimating: true})
          }

          const onEndAnimation = frames => {
            this.setState({isAnimating: false})
            // console.log('frames.length', frames)
            // console.log('this.state', this.state)
            // if (frames.length === 0) {
            // this.setState({isOpen: false})
            // window.requestAnimationFrame(() => closePortal())
            // }
          }
          return [
            <AppHeader
              key="appheader"
              onClick={handleOpenPortal}
              isOpen={this.state.isOpen}
            />,
            portal(
              <ItemsContainer vertical>
                <MyMagicHatContainer
                  renderFrame={this.renderFrame}
                  flipMoveOptions={() => ({
                    enterAnimation: 'fade',
                    leaveAnimation: 'fade',
                    duration: 400
                  })}
                  onStartAnimation={onStartAnimation}
                  onEndAnimation={onEndAnimation}
                />
              </ItemsContainer>
            )
          ]
        }}
      </PortalWithState>
    )
  }
}
