/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import Carousel from 'react-bootstrap/Carousel'

import Logo from './../../assets/img/Photography/500px.svg'
import Arrow from './../../assets/img/Photography/arrow.svg'

// Image Slides
import GhostStair from './Slides/GhostStair.jpg'
import LobsterPot from './Slides/LobsterPot.jpg'
import CamdenStars from './Slides/CamdenStars.png'
import AfterTheShow from './Slides/AfterTheShow.jpg'

const Photography = () => {
  return (
    <div id='Photos' css={PhotographyCSS}>
      <div className='heading'>
        <h1>Photography</h1>
        <p>Check me out on</p><a href='https://500px.com/p/richardmbresnahan?view=photos' target='_blank' rel='noopener noreferrer'><img src={Logo} /><img src={Arrow} style={{'height': '50px'}}/></a>
      </div>
      <Carousel style={{'position': 'relative', 'top': '20vh'}}>
        <Carousel.Item>
          <img src={GhostStair} alt='The Ghost Stair'/>
          <Carousel.Caption>
            <h5>The Ghost Stair</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={LobsterPot} alt='Beached Lobster Pot'/>
          <Carousel.Caption>
            <h5>Beached</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CamdenStars} alt='Camden Stars'/>
            <Carousel.Caption>
              <h5>Camden Star Trails</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={AfterTheShow} alt='After the Show'/>
            <Carousel.Caption>
              <h5>After the Show</h5>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Photography

const PhotographyCSS = css`
  background: dimgray;
  height: 120vh;

  .heading {
    align-items: center;
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 2vh; top: 11vh;

    img {
      filter: invert(1);
      height: 20px;
    }

    h1 {
      color: white;
      font-family: 'Libre Caslon Display';
      font-style: italic;
      margin: 0;
      z-index: 10;
    }

    p {
      color: white;
      font-family: 'Montserrat';
      margin: 0 .5rem 0 1rem;
      font-size: .8;
    }
  }

  img {
    height: 70vh;
  }
`
