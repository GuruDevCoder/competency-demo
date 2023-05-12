import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'

export default class Grades extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
    data: PropTypes.object,
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
    const {data, isActive, actions: {setNextFrame, getNextFrame}} = this.props
    const {title, answers, question, description} = data
    // debugger //eslint-disable-line
    // console.log('getNextFrame().state', getNextFrame().state)
    return (
      <Frame
        onClickClose={this.goBack}
        isActive={isActive}
        frameWidth="100vw"
        frameHeight={isActive ? '90vh' : '10vh'}
      >
        <HoveredFlexCenter>
          {isActive ? (
            <div className="canvas">
              <div className="cardImage cardImageBorder cardImage4" />
              <div className="cardMask cardMaskBorder" />
              <div className="cardWrapper active">
                <h2 className="titleText">{title}</h2>
                <h3 className="question">{question}</h3>
                <p className="information informationLarge">{description}</p>

                <form>
                  {answers.map(
                    ({title, question, answer, description, answers}) => (
                      <div key={answer}>
                        <button
                          className="optionButton"
                          onClick={() =>
                            setNextFrame('Roles', {
                              title,
                              answer,
                              question,
                              description,
                              answers
                            })
                          }
                        >
                          {answer}
                        </button>
                        <p className="information withBottomMargin">
                          {description}
                        </p>
                      </div>
                    )
                  )}
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="question_minified">{question}</h2>
              <h3 className="answer_minified">{getNextFrame().state.answer}</h3>
            </div>
          )}
        </HoveredFlexCenter>
      </Frame>
    )
  }
}
