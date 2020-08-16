/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import Media from 'react-media'

import splashImg from './../../assets/img/Header/Beached Lobster Pot.jpg'

const Splash = () => {
  return (

    <Media queries={{
        mobile: "(max-width: 500px)",
        mid: "(min-width: 501px) and (max-width: 1200px)",
        large: "(min-width: 1201px)"
    }}>

    {matches => (
      <Fragment>
        {matches.mobile &&
          <div css={mobileImg}>
            <img src={splashImg} alt='Beached Lobster Pot' />
          </div>
        }

        {matches.mid &&
          <div css={midImg}>
            <img src={splashImg} alt='Beached Lobster Pot' />
          </div>
        }

        {matches.large &&
          <div css={desktopImg}>
            <img src={splashImg} alt='Beached Lobster Pot' />
          </div>
        }
      </Fragment>
    )}
    </Media>

  )
}

export default Splash;

const mobileImg = css`
  z-index: -5;

  img {
    position: relative;
    width: 100%;
    z-index: -5;
  }
`

const midImg = css`
  align-items: center;
  background: #212529;
  display: flex;
  height: 50vh;
  justify-content: center;
  width: 100%;

  img {
    position: relative;
    width: 80%;
  }
`

const desktopImg = css`
  align-items: center;
  background: #212529;
  display: flex;
  height: 80vh;
  justify-content: center;
  width: 100%;

  img {
    position: relative;
    height: 90%;
  }
`
