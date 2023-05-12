import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'

export default class Profile extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    profile: PropTypes.object,
    actions: PropTypes.shape({
      setNextFrame: PropTypes.func,
      getNextFrame: PropTypes.func,
      replaceFrame: PropTypes.func,
      closeFrame: PropTypes.func,
      closeCurrentFrame: PropTypes.func,
      getCurrentFrame: PropTypes.func,
      setCurrentFrame: PropTypes.func
    })
  }

  goBack = event => {
    this.props.actions.closeCurrentFrame()
  }

  render() {
    const {
      title,
      description,
      profile,

      isActive,
      actions: {setNextFrame, getNextFrame}
    } = this.props

    return (
      <Frame
        onClickClose={this.goBack}
        isActive={isActive}
        frameWidth="100vw"
        frameHeight={isActive ? '90vh' : '5vh'}
      >
        <HoveredFlexCenter>
          {isActive ? (
            <div className="canvas">
              <div className="cardImage  cardImageBorder" />
              <div className="cardMask cardMaskBorder" />
              <div className="cardWrapper active" style={{background: 'black'}}>
                <h2 className="titleText">{title}</h2>
                {/* <h3 className="question">{question}</h3> */}

                <img
                  src="./career-acer-profile.png"
                  alt=""
                  onClick={() => setNextFrame('Matrix')}
                />
              </div>
            </div>
          ) : (
            <div />
          )}
        </HoveredFlexCenter>
      </Frame>
    )
  }
}
