/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'

const Contact = () => {
  return (
    <div id='Contact' css={ContactCSS}>
      <h1>Contact Me</h1>

    </div>
  )
}

export default Contact

const ContactCSS = css`
  background: darkslategray;
  height: 100vh;

  h1 {
    color: white;
    font-family: 'Libre Caslon Display';
    font-style: italic;
    position: absolute;
    left: 2vh; top: 11vh;
    z-index: 10;
  }
`
