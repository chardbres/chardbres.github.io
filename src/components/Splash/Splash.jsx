/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'

import splashImg from './../../assets/img/Header/Beached Lobster Pot.jpg'

const Splash = () => {
  return (
          <div css={splash}>
            <img src={splashImg} alt='Beached Lobster Pot' />
          </div>
  )
}

export default Splash;

const splash = css`
  background: #212529;
  position: fixed;
  top: 10vh;
  z-index: -1;

  @media (min-width: 501px) {
    height: 50vh;
    margin: auto;
    width: 100vw;
  }

  @media (min-width: 1201px) {
    align-items: center;
    display: flex;
    height: 75vh;
    justify-content: center;
  }

  img {
    width: 100vw;
    @media (min-width: 501px) {
      width: 80%;
    };
    @media (min-width: 1201px) {
      height: 90%;
      width: auto;
    }
  }
`
