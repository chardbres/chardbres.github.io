/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'

const Projects = () => {

  const ProjectCol = tag => {
    return (
      <Fragment>
        <Col id={tag} css={ProjectCSS}>
          <p>This is a project div!</p>
        </Col>
      </Fragment>
    )
  }

  return (
    <div id='Projects' css={ProjectsCSS}>
      <h1>Projects</h1>
        <Container css={ContainerCSS} fluid='true'>
        <Row css={RowCSS} xs={1} md={3}>
          <ProjectCol tag='Project1' />
          <ProjectCol tag='Project2' />
        </Row>
      </Container>
    </div>
  )
}

export default Projects;

const ProjectsCSS = css`
  background: CornflowerBlue;
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
  border: 2px solid yellow;
  height: 70vh;
  position: relative;
  top: 20vh;
`

const RowCSS = css`
  display: flex;
  height: 50%;
  justify-content: center;
`

const ProjectCSS = css`
  border: 1px solid red;
  background: white;
  z-index: 50;
`
