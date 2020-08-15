/** @jsx jsx */
import React, { Fragment, useState } from 'react';
import { css, jsx } from '@emotion/core'
import { Nav, Navbar } from 'react-bootstrap'
import Media from 'react-media'

import Burger from '@animated-burgers/burger-arrow'
import '@animated-burgers/burger-arrow/dist/styles.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerTags = [ 'My Projects', 'Photography', 'About Me', 'Contact']

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
              <Burger direction='up' isOpen={isOpen} onClick={toggleOpen} />
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

const headerCSS = css`
  align-items: center;
  justify-content: space-around;
  background: #212529;
  color: #fff;
  display: flex;
  flex-direction: row;
  height: 8vh;

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
    left: 0;
    position: fixed;
    width: 100vw;
    top: 8vh;
    transition: transform .7s
              cubic-bezier(0, .52, 0, 1);
    z-index: -1;

    p {
      text-align: left;
      text-indent: 10vw;
      width: 40vw;
    }
  }

  #closed {
    transform: translateY(-142px)
  }

  #open {
    transform: translateY(0px)
  }
`
