/** @jsx jsx */
import React, { Fragment, useState, useEffect, useRef } from 'react';
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
    <div css={headerCSS}>

      <Media queries={{
          mobile: "(max-width: 500px)",
          large: "(min-width: 501px)"
      }}>

      {matches => (
        <Fragment>
          <h1>R|B</h1>

          {/* Mobile View */}
          {matches.mobile &&
            <div>
              <Burger direction='up' isOpen={isOpen} onClick={toggleOpen} style={{'font-size': '10px'}}/>
              <div id={setProp(isOpen)} className='mobileCSS'>
                {headerTags.map(tag => {
                  return <p key={tag}>{tag}</p>
                })}
              </div>
            </div>
          }

          {/* Tablet/Desktop View */}
          {matches.large &&
            <div>
              {headerTags.map(tag => {
                return <p key={tag}>{tag}</p>
              })}
            </div>
          }
        </Fragment>
      )}
      </Media>
    </div>
  )
}

export default Header

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const headerCSS = css`
  align-items: center;
  justify-content: space-around;
  background: #212529;
  color: #fff;
  display: flex;
  height: 10vh;
  flex-direction: row;
  position: fixed;
  left: 0; top: 0;
  width: 100%;
  z-index: 5;

  h1 {
    font-family: 'IBM Plex Mono';
    font-size: 2.5rem;
    margin: 0;
  }

  div {
    display: flex;

    p {
      color: #fff;
      font-family: 'Montserrat';
      margin: 0 1rem;
      padding: .5rem;
      text-decoration: none;
    }
  }

  .mobileCSS {
    background: #212529;
    flex-direction: column;
    height: 190px;
    left: 0; top: 8vh;
    justify-content: center;
    position: fixed;
    width: 100vw;
    transition: transform .7s
              cubic-bezier(0, .52, 0, 1);
    z-index: -1;

    p {
      text-align: left;
      text-indent: 5vw;
      width: 40vw;
    }
  }

  #closed {
    transform: translateY(-190px)
  }

  #open {
    transform: translateY(0px)
  }
`
