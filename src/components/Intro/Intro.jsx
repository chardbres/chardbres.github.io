/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import Media from 'react-media'


const Intro = () => {
  return (

    <Media queries={{
        mobile: "(max-width: 500px)",
        large: "(min-width: 501px)"
      }}>

      {matches => (
        <Fragment>
          {matches.mobile &&
            <div css={mobileCSS}>
              <div><h1><i style={{'font-size': '26px'}}>Hi, my name is</i></h1></div>
              <div><h1 style={{'font-size': '40px'}}>Rick Bresnahan</h1></div>
            </div>
          }

          {matches.large &&
            <div css={introCSS}>
              <h1><i style={{'font-size': '26px'}}>Hi, my name is&nbsp;&nbsp;</i></h1>
              <h1 style={{'font-size': '60px'}}>Rick Bresnahan</h1>
            </div>
          }
        </Fragment>
      )}
    </Media>
  )
}

export default Intro;

const introCSS = css`
  align-items: center;
  display: flex;
  height: 11vh;
  justify-content: center;

  h1 {
    align-items: center;
    display: flex;
    font-family: 'Montserrat';
  }
`

const mobileCSS = css`

  div {
    margin: 0 auto;
    width: 100vw;

    h1 {
      align-items: center;
      display: flex;
      font-family: 'Montserrat';
      justify-content: center;
      margin: 0;
      width: 100%;
    }
  }
`
