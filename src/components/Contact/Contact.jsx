/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Logo imports
import GitHubWhite from './../../assets/img/Contact/githubwhite.png'
import LinkedInWhite from './../../assets/img/Contact/linkedinwhite.png'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const onNameChange = event => {
    setFormState({ name: event.target.value})
  }

  const onEmailChange = event => {
    setFormState({ email: event.target.value})
  }

  const onSubjectChange = event => {
    setFormState({ subject: event.target.value })
  }

  const onMsgChange = event => {
    setFormState({ message: event.target.value })
  }

  return (
    <div id='Contact' css={ContactCSS}>
      <h1>Contact Me</h1>
      <form css={FormCSS} action='https://usebasin.com/f/5604ad52d44e' method='POST'>
        <p><i>Please drop me a line and I'll get back to you soon!</i></p>
        <Container>
            <Row className='formRow' >
              <Col className='formCol' sm={6} >
                <input placeholder = 'Name' type='text' name='name' required value = {formState.name} onChange={onNameChange} />
              </Col>
              <Col className='formCol' sm={6}>
                <input placeholder = 'Email' type='email' name='email' required value = {formState.email} onChange={onEmailChange} />
              </Col>
            </Row>
            <Row className='formRow' >
              <Col className='formCol' sm={12}>
                <input style={{'width': '95%'}} placeholder = 'Subject.....' type='text' name='subject' required value = {formState.subject} onChange={onSubjectChange} />
              </Col>
            </Row>
            <Row className='formRow' >
              <Col className='formCol' sm={12}>
                <textarea rows='8' placeholder='Message.....' type='text' name='message' required value = {formState.message} onChange={onMsgChange}></textarea>
              </Col>
            </Row>
            <Button variant='outline-light' type='submit'>Submit</Button>
        </Container>
      </form>
      <div css={FooterCSS}>
        <footer><p>&copy; Copyright 2020, Rick Bresnahan. All Rights Reserved.</p></footer>
        <a href='https://www.linkedin.com/in/rickbresnahan/' target='_blank' rel='noopener noreferrer'><img src={LinkedInWhite} alt='LinkedIn'/></a>
        <a href='https://github.com/chardbres' target='_blank' rel='noopener noreferrer'><img src={GitHubWhite} alt='GitHub'/></a>      </div>
    </div>
  )
}

export default Contact

const ContactCSS = css`
  align-items: center;
  background: #212529;
  display: flex;
  height: 100vh;
  justify-content: center;

  h1 {
    color: white;
    font-family: 'Libre Caslon Display';
    font-style: italic;
    position: absolute;
    left: 2vh; top: 11vh;
    z-index: 10;
  }
`

const FormCSS = css`
  width: 60%;

  p {
    color: white;
    font-family: 'Montserrat';
    margin: 1rem auto 2rem;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .formRow {
    margin: 1.5rem auto;
  }

  .formCol {

    input {
      background: transparent;
      color: white;
      border-top: none; border-left: none; border-right: none;
      border-bottom: 1px solid white;
      width: 90%;
      ::placeholder {color: white; opacity: .5;}
    }

    textarea {
      background: transparent;
      border: 1px solid white;
      border-radius: 5px;
      color: white;
      width: 95%;
      ::placeholder {color: white; opacity: .5;}
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`

const FooterCSS = css`
  align-items: center;
  bottom: 1vh;
  color: white;
  display: flex;
  flex-direction: row;
  margin: auto;
  position: absolute;

  img {
    margin: 0 .5rem 0 0;
    height: 1rem;
  }

  p {
    margin: 0 .5rem;

    @media (max-width: 500px) {
      font-size: 70%;
    }
  }
`
