/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import Carousel from 'react-bootstrap/Carousel'

import GhostStair from './Slides/GhostStair.jpg'
import LobsterPot from './Slides/LobsterPot.jpg'
import StarryField from './Slides/StarryField.jpg'
import CamdenStars from './Slides/CamdenStars.png'

const Photography = () => {
  return (
    <div id='Photos' css={PhotographyCSS}>
      <h1>Photography</h1>
      <Carousel style={{'position': 'relative', 'top': '20vh'}}>
        <Carousel.Item>
          <img src={GhostStair} alt='The Ghost Stair'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={LobsterPot} alt='Beached Lobster Pot'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={StarryField} alt='Starry Field'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CamdenStars} alt='Camden Stars'/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Photography;

const PhotographyCSS = css`
  background: dimgray;
  height: 120vh;

  h1 {
    color: white;
    font-family: 'Libre Caslon Display';
    font-style: italic;
    position: absolute;
    left: 2vh; top: 11vh;
    z-index: 10;
  }

  img {
    height: 70vh;
  }

  // @media (max-width: 500px) {
  //   img {
  //     height: auto;
  //     width: 100vw;
  //   }
  // }
`
