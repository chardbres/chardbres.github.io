/** @jsx jsx */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/core'
import Media from 'react-media'


const Intro = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  console.log(offset)

  const FadingName = props => (
      <Fragment>
        <h1><i style={{'font-size': '26px', 'opacity': `${props.opacity}`}}>Hi, my name is&nbsp;&nbsp;</i></h1>
        <h1 style={{'font-size': '60px', 'opacity': `${props.opacity}`}}>Rick Bresnahan</h1>
      </Fragment>
  )

  return (

    <Media queries={{
        mobile: "(max-width: 500px)",
        large: "(min-width: 501px)"
      }}>

      {matches => (
        <Fragment>

          {/* Mobile View */}
          {matches.mobile &&
            <div css={mobileCSS}>
              <div><h1><i style={{'font-size': '18px'}}>Hi, my name is</i></h1></div>
              <div><h1 style={{'font-size': '40px'}}>Rick Bresnahan</h1></div>
            </div>
          }

          {/* Tablet/Desktop View */}
          {matches.large &&
            <div css={introCSS} opacity={.5}>
              <div className='intro-header'>
                <FadingName opacity={1 - (offset / 300)}/>
              </div>
              <div className='quote'>
                <p><i>"The heart of a man is very much like the sea - it has its storms, it has its tides and in its depths it has its pearls too."</i></p>
                <p style={{'font-weight': 'bold'}}>- Vincent van Gogh -</p>
              </div>
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
  background: #fff;
  height: 100vh;
  position: relative;
  top: 90vh;
  z-index: 2;

  .intro-header {
    background: #fff;
    display: flex;
    height: 10vh;
    flex-direction: row;
    justify-content: center;

    h1 {
      align-items: center;
      display: flex;
      font-family: 'Montserrat';
    }
  }

  .quote {
    align-items: center;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30vh;
    position: relative;
    top: 30vh;

    p {
      font-family: 'Libre Caslon Display';
      font-size: 200%;
      margin:  0 auto;
    }
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
