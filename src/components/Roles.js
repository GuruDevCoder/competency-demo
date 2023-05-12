import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'

export default class Roles extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
    gradeData: PropTypes.object,
    grade: PropTypes.string,
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
      question,
      title,
      description,
      answers,
      isActive,
      actions: {setNextFrame, getNextFrame}
    } = this.props
    // debugger //eslint-disable-line
    // const roles = gradeData.roles
    // console.log('roles', roles)

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
              <div className="cardImage cardImage2 cardImageBorder" />
              <div className="cardMask cardMaskBorder" />
              <div className="cardWrapper active">
                <h2 className="titleText">{title}</h2>
                <h3 className="question">{question}</h3>

                <form>
                  {answers.map(
                    ({
                      answer,
                      answers,
                      question,
                      title,
                      description,
                      levels
                    }) => (
                      <div key={answer}>
                        <button
                          className="optionButton"
                          onClick={() =>
                            setNextFrame('Levels', {
                              answers,
                              answer,
                              question,
                              title,
                              description
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
