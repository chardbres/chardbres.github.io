/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'

const Project = () => {
  return (
    <div css={ProjectCSS}>
      <p>This is a project div!</p>
    </div>
  )
}

export default Project;

const ProjectCSS = css`
  background: white;
  height: 200px;
  width: 200px;
  z-index: 50;
`
