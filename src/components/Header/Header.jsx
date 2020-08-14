/** @jsx jsx */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { css, jsx } from '@emotion/core'
import Media from 'react-media'

const Header = () => {
  const headerTags = [ 'My Projects', 'Photography', 'About Me', 'Contact']

  return (
    <div css={headerCSS}>
      <h1>R|B</h1>
      <div css={tagCSS}>
        {headerTags.map(tag => {
          return <p key={tag}>{tag}</p>
        })}
      </div>
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
  height: 7vh;

  h1 {
    border: 1px solid red;
    font-family: 'IBM Plex Mono';
    font-size: 2.5rem;
  }

  p {
    color: #fff;
    font-family: 'Montserrat';
    margin: 0 1rem;
    text-decoration: none;
  }
`

const tagCSS = css`
  display: flex;
  flex-direction: row;
  p:link {
    text-decoration: none;
  }
`
