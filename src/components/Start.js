import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'
import Data from '../hackathon.json'

export default class Start extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
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
    const {isActive, actions: {setNextFrame, getNextFrame}} = this.props

    const {title, description, answers, question} = Data

    return (
      <Frame
        onClickClose={this.goBack}
        isActive={isActive}
        frameWidth={isActive ? '100vw' : '100vw'}
        frameHeight={isActive ? '100vh' : '10vh'}
        noBorder={true}
      >
        <HoveredFlexCenter>
          {isActive ? (
            <div className="canvas">
              <div className="headerStart">
                <h3>{title}</h3>
              </div>
              <div className="cardWrapper active">
                <p className="information informationLarge blackFont lineHeightMore">
                  {description}
                </p>
                <h3 className="question blackFont">{question}</h3>
                <form>
                  <h3
                    className="answer "
                    onClick={() => setNextFrame('Grades', {data: answers[0]})}
                  >
                    {answers[0].answer}
                  </h3>
                  <h3
                    className="answer "
                    onClick={() => setNextFrame('Grades', {data: answers[1]})}
                  >
                    {answers[1].answer}
                  </h3>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="question_minified">{question}</h2>
              <h3 className="answer_minified">
                {getNextFrame().state.data.answer}
              </h3>
            </div>
          )}
        </HoveredFlexCenter>
      </Frame>
    )
  }
}
