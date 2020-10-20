/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core'
import { Col } from 'react-bootstrap'

const Project = props => {
  const color = props.color

  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <Fragment>
      <Col id={props.tag} css={ProjectCSS} onClick={() => openInNewTab(props.url)} >
        <img src={props.img} alt='' />
        <h3 css={css`color: ${color}`}>{props.title}</h3>
      </Col>
    </Fragment>
  )
}

export default Project;

const ProjectCSS = css`
  align-items: center;
  background: white;
  display: flex;
  height: 50%;
  justify-content: center;
  margin: 0;
  padding: 0;

  h3 {
    font-family: 'Montserrat';
    position: absolute;
    font-weight: bold;
    z-index: 1;
  }

  img {
    height: 100%;
    width: 100%;
    left: 0;
    object-fit: cover;
    opacity: .8;
    position: absolute;
    z-index: 0;
    transition: filter .6s;
    transition-timing-function: cubic-bezier(.37, 0, .63, 1);

    &:hover {
      filter: grayscale(100%);
      opacity: .5;
    }
  }
`
