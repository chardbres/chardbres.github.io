/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'

import Project from './Project'

const Projects = () => {

  return (
    <div id='Projects' css={ProjectsCSS}>
      <h1>Projects</h1>
        <Container css={ContainerCSS} fluid='true'>
        <Row css={RowCSS} xs={1} md={3}>
          <Project />
        </Row>
      </Container>
    </div>
  )
}

export default Projects;

const ProjectsCSS = css`
  background: SteelBlue;
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

const ProjectCSS = css`
  border: 1px solid black;
  background: white;
  height: 50%;
  margin: 0;
  z-index: 50;
`
