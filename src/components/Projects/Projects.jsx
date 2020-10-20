/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'

import Project from './Project'

// Imported Images
import WorkFromRoam from './../../assets/img/Projects/workfromroam.PNG'
import Rickhouse from './../../assets/img/Projects/rickhouse.PNG'
import SmashFactor from './../../assets/img/Projects/smashfactor.PNG'

const Projects = () => {

  return (
    <div id='Projects' css={ProjectsCSS}>
      <h1>Projects</h1>
        <Container css={ContainerCSS} fluid='true'>
        <Row css={RowCSS} xs={1} sm={2} xl={3}>
          <Project
            title={'Work From Roam'}
            color={'black'}
            img={WorkFromRoam}
          />
          <Project
            title={'Rickhouse'}
            color={'black'}
            img={Rickhouse}
          />
          <Project
            title={'Smash Factor'}
            color={'black'}
            img={SmashFactor}
          />
        </Row>
      </Container>
    </div>
  )
}

export default Projects;

const ProjectsCSS = css`
  background: steelblue;
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
