/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'

const About = () => {
  return (
    <div id='About' css={AboutCSS}>
      <h1>About Me</h1>

    </div>
  )
}

export default About

const AboutCSS = css`
  background: #e8e8e8;
  height: 120vh;

  h1 {
    color: #212529;
    font-family: 'Libre Caslon Display';
    font-style: italic;
    position: absolute;
    left: 2vh; top: 11vh;
    z-index: 10;
  }
`
