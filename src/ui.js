import React from 'react'
import {Spin, Icon} from 'antd'
import styled, {css} from 'styled-components'

export const media = {
  handheld: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `
}

const Container = styled.div`
  width: ${props => props.frameWidth || '50vw'};
  height: ${props => props.frameHeight || 'auto'};
  z-index: ${props => (props.isActive ? 33 : 66)};
  border-top-left-radius: ${props => (props.noBorder ? 0 : '18px')};
  border-top-right-radius: ${props => (props.noBorder ? 0 : '18px')};
  position: relative;
  display: flex;
  transform-origin: 50% 50%;
  position: relative;
  overflow: hidden;

  & > * {
    flex: 1 1 auto;
    overflow: auto;
  }
`

const CloseIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 8px;
  color: white;
  transition: color 200ms ease-in;
  &:hover {
    color: #a9a9a9;
  }
`

const CloseIconWrapper = styled.span`
  flex: 0;
  transition: opacity 400ms ease-in-out;
  opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
  pointer-events: ${({isVisible}) => (isVisible ? 'auto' : 'none')};
`

export const ActionIcon = styled(Icon)`
  transition: all 200ms ease-out;
  font-size: 1.2rem;
  color: #a9a9a9;
  cursor: pointer;
  &:hover {
    color: #61dafb;
    transform: scale(1.2);
  }
`

export const Hovered = styled.div`
  background: white;
  padding: 1em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  border-radius: 0.28571429rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`

export const HoveredFlexCenter = styled.div`
  background: white;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ItemsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({vertical}) => (vertical ? 'column' : 'row')};
`

export const Frame = ({
  isActive,
  onClickClose,
  frameWidth,
  frameHeight,
  render,
  children,
  noBorder
}) => (
  <Container
    isActive={isActive}
    frameWidth={frameWidth}
    frameHeight={frameHeight}
    noBorder={noBorder}
  >
    {render ? render() : children}
    {
      <CloseIconWrapper isVisible={isActive}>
        <CloseIcon type="close" onClick={onClickClose} />
      </CloseIconWrapper>
    }
  </Container>
)

const Header = styled.header`
  width: 15rem;
  height: 16rem;
  display: flex;
  align-items: center;
  transition: all 400ms ease-in;
  will-change: transform, opacity, filter;
`

const StartButton = styled.a`
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  border-radius: 50%;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 1px 1px white,
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
  display: block;
  height: 240px;
  position: relative;
  width: 240px;
  transition: all 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: -webkit-linear-gradient(top, #fff, #f4f1ee);
    background-image: linear-gradient(top, #fff, #f4f1ee);
    color: #0088cc;
  }

  ${props =>
    props.isOpen
      ? `
    background-image: -webkit-linear-gradient(top, #efedec, #f7f4f4);
    background-image: linear-gradient(top, #efedec, #f7f4f4);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
    opacity: 0;
  `
      : ''};
`

export const AppHeader = props => (
  <Header>
    <StartButton href="#" onClick={this.handleChange} {...props}>
      <div className="App-header">
        <svg width="190px" height="190px" viewBox="0 0 60 60" version="1.1">
          <g
            id="Brand"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Brand-–-Web"
              transform="translate(-186.000000, -434.000000)"
              fill="#2D2D2D"
            >
              <g
                id="asos-brand-logos"
                transform="translate(132.000000, 192.000000)"
              >
                <g
                  id="logos/asos-a-roundal"
                  transform="translate(0.000000, 210.000000)"
                >
                  <g id="example">
                    <g
                      id="brand/logos/asos-a-roundal"
                      transform="translate(54.000000, 32.000000)"
                    >
                      <path
                        d="M30,56 C44.3594035,56 56,44.3594035 56,30 C56,15.6405965 44.3594035,4 30,4 C15.6405965,4 4,15.6405965 4,30 C4,44.3594035 15.6405965,56 30,56 Z M30,60 C13.4314575,60 0,46.5685425 0,30 C0,13.4314575 13.4314575,0 30,0 C46.5685425,0 60,13.4314575 60,30 C60,46.5685425 46.5685425,60 30,60 Z M29.0865319,38.4603242 C25.8375218,38.4603242 22.8614645,35.9032786 22.8614645,31.3231878 C22.8614645,27.728631 25.0921282,24.2455784 29.1074389,24.2455784 C30.8470778,24.2455784 35.2564279,24.841719 35.2564279,31.3231878 C35.2564279,37.821208 30.6522359,38.4603242 29.0865319,38.4603242 Z M40,20.9370413 C40,20.734069 39.8336149,20.5682646 39.6315136,20.5682646 L35.7088327,20.5682646 C35.5064411,20.5682646 35.3406367,20.734069 35.3406367,20.9370413 L35.3406367,21.9661317 C35.3406367,22.1391954 35.2244866,22.1990127 35.0836545,22.0985428 C33.6881104,21.0860039 31.6241223,20 29.1402513,20 C27.7447072,20 26.4115939,20.2456576 25.1783697,20.7297133 C23.9434032,21.2140594 22.7714482,21.9521937 21.6944459,22.92408 C20.4679003,24.0391215 19.5349242,25.3106753 18.9233937,26.7018637 C18.3101209,28.0939232 18,29.648593 18,31.3231878 C18,32.8859881 18.2749855,34.3500607 18.8168259,35.6747532 C19.3589568,36.9991553 20.1839132,38.2245394 21.2696267,39.3163508 C22.3556306,40.4090333 23.5693997,41.2392165 24.8772504,41.7842511 C26.1839396,42.3289953 27.6247822,42.6048519 29.1602872,42.6048519 C31.8012513,42.6048519 33.7824824,41.4808088 35.0798796,40.4581068 C35.2233251,40.3497967 35.3406367,40.4081622 35.3406367,40.5873238 L35.3406367,41.6672298 C35.3406367,41.8699118 35.5064411,42.0357162 35.7088327,42.0357162 L39.6315136,42.0357162 C39.8336149,42.0357162 40,41.8699118 40,41.6672298 L40,20.9370413 Z"
                        id="logos/asos-a-roundal"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StartButton>
  </Header>
)

const SpinnerWrapper = styled.div`
  transition: opacity 300ms ease-in-out;
  opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
  pointer-events: ${({isVisible}) => (isVisible ? 'auto' : 'none')};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = props => (
  <SpinnerWrapper {...props}>
    <Spin size="large" />
  </SpinnerWrapper>
)
