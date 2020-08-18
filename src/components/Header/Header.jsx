/** @jsx jsx */
import React, { Fragment, useState } from 'react';
import { css, jsx } from '@emotion/core'
import Media from 'react-media'

import Burger from '@animated-burgers/burger-arrow'
import '@animated-burgers/burger-arrow/dist/styles.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerTags = [ 'Projects', 'Photography', 'Writing', 'About Me', 'Contact']

  const toggleOpen = event => {
    event.persist()
    setIsOpen(!isOpen)
  }

  const setProp = key => {
    return key === true ? 'open' : 'closed'
  }

  return (

    <Media queries={{
        mobile: "(max-width: 500px)",
        large: "(min-width: 501px)"
    }}>

      {matches => (
        <Fragment>

          {/* Mobile View */}
          {matches.mobile &&
              <div css={wrapper}>
                <div css={headerCSS}>
                  <h1>R|B</h1>
                  <Burger direction='up' isOpen={isOpen} onClick={toggleOpen} style={{'font-size': '10px'}}/>
                </div>
                <div id={setProp(isOpen)} css={mobileCSS}>
                  {headerTags.map(tag => {
                    return <p key={tag}>{tag}</p>
                  })}
                </div>
              </div>
          }

          {/* Tablet/Desktop View */}
          {matches.large &&
            <div css={headerCSS}>
              <h1>R|B</h1>
              <div>
                {headerTags.map(tag => {
                  return <p key={tag}>{tag}</p>
                })}
              </div>
            </div>
          }

          </Fragment>
      )}

    </Media>
  )

}

export default Header

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const headerCSS = css`
  align-items: center;
  background: #212529;
  color: #fff;
  display: flex;
  justify-content: space-around;
  height: 10vh;
  flex-direction: row;
  position: fixed;
  width: 100vw;
  z-index: 10;

  h1 {
    font-family: 'IBM Plex Mono';
    font-size: 2.5rem;
    margin: 0;
  }

  div {
    display: flex;

    p {
      font-family: 'Montserrat';
      margin: 0 1rem;
      padding: .5rem;
      text-decoration: none;
    }
  }
`

const wrapper = css`
  background: #212529;
  color: #fff;

  #closed {
    transform: translateY(-190px)
  }

  #open {
    transform: translateY(0px)
  }
`

const mobileCSS = css`
  background: #212529;
  flex-direction: column;
  font-family: 'Montserrat';
  height: 190px;
  justify-content: center;
  position: fixed;
  left: 0; top: 10vh;
  width: 100vw;
  transition: transform .7s
            cubic-bezier(0, .52, 0, 1);
  z-index: 5;

  p {
    text-align: left;
    text-indent: 5vw;
    width: 40vw;
  }
`
