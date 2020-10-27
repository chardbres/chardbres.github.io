/** @jsx jsx */
import React, { Fragment, useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core'

const Quote = ({ offset }) => {

  const Quote = () => {
    return (
      <div className='Quote'>
        <p><i>"The heart of a man is very much like the sea - it has its storms, it has its tides and in its depths it has its pearls too."</i></p>
        <p style={{'font-weight': 'bold'}}>- Vincent van Gogh -</p>
      </div>
    )
  }

  const FadingName = props => {
    return (
      <div className='IntroHeader'>
        <h1 className='Greeting' style={{'opacity': `${props.opacity}`}}><i>&nbsp;&nbsp;Hello, my name is&nbsp;&nbsp;</i></h1>
        <h1 className='Name' style={{'opacity': `${props.opacity}`}}>Rick</h1>
      </div>
    )
  }

  return (
    <Fragment>
      {/* Spacing Div */}
      <div css={SpacingDiv}></div>
      <div css={IntroCSS}>
        <FadingName opacity={1 - (offset / .4)} />
        <Quote />
      </div>
    </Fragment>
  )
}

export default Quote;

const SpacingDiv = css`
  height: 40vh;
  @media (min-width: 501px) {
    height: 60vh;
  };
  @media (min-width: 1201px) {
    height: 85vh;
  }
`

const IntroCSS = css`
  background: #fff;
  height: 60vh;
  z-index: 2;

  @media (min-width: 501px) {
    height: 60vh;
  };

  @media (min-width: 1201px) {
    height: 120vh;
  };

  .IntroHeader {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 15vh;
    justify-content: center;

    h1 {
      margin: 0;
    }

    .Greeting {
      font-family: 'Libre Caslon Display';
      font-size: 18px;
    }

    .Name {
      font-family: 'Montserrat';
      font-size: 40px;
    }

    @media (min-width: 501px) {
      flex-direction: row;
      justify-content: center;

      .Greeting {
        font-family: 'Libre Caslon Display';
        font-size: 26px;
      }

      .Name {
        font-family: 'Montserrat';
        font-size: 60px;
      }
    }
  }

  .Quote {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    width: 60%;

    @media (min-width: 1201px) {
      top: 27.5vh;
    }

    p {
      font-family: 'Libre Caslon Display';
      margin:  0 auto;

      @media (min-width: 1201px) {
        font-size: 200%;
      }
    }
  }
`
