/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'

import Article from './Article'

// Image imports
import Funnel from './img/funnel.jpg'

const Writing = () => {
  return (
    <div id='Writings' css={WritingsCSS}>
      <h1>Writing</h1>
        <Container css={ContainerCSS} fluid='true'>
        <Row css={RowCSS} xs={1} md={3}>
          <Article
            title={'How I Implemented a Simple Filter Component in React'}
            color={'black'}
            img={Funnel}
            url={'https://medium.com/@richard.m.bresnahan/how-i-implemented-a-simple-filter-feature-in-react-6d23289baf9a'}
          />
        </Row>
      </Container>
    </div>
  )
}

export default Writing

const WritingsCSS = css`
  background: DarkRed;
  height: 120vh;

  h1 {
    color: white;
    font-family: 'Libre Caslon Display';
    font-style: italic;
    position: absolute;
    left: 2vh; top: 11vh;
    z-index: 10;
  }
`

const ContainerCSS = css`
  height: 70vh;
  position: relative;
  top: 20vh;
`

const RowCSS = css`
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  width: 100%;
`
