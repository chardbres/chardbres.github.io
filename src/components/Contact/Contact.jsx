/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'

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

  const onSubmit = event => {
    event.preventDefault()
    fetch('https://usebasin.com/f/5604ad52d44e.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/JSON',
        Accept: 'applicatoin/json'
      },
      body: JSON.stringify(formState)
    })
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  return (
    <div id='Contact' css={ContactCSS}>
      <h1>Contact Me</h1>
      <Container>
        <Row>
          <Col>
            <section css={FormCSS}>
              <p>Please drop me a line!</p>
              <form onSubmit={onSubmit}>
                <Row>
                  <Col sm={6}>
                    <input placeholder = 'Name' type='text' required value = {formState.name} onChange={onNameChange} />
                  </Col>
                  <Col sm={6}>
                    <input placeholder = 'Email' type='email' required value = {formState.email} onChange={onEmailChange} />
                  </Col>
                </Row>
                <Row>
                  <input placeholder = 'Subject' type = 'text' required value = {formState.subject} onChange={onSubjectChange}/>
                </Row>
                <Row>
                  <input placeholder = 'Message' type='text' required value = {formState.message} onChange={onMsgChange}/>
                </Row>
                <button type='submit'>Submit</button>
              </form>
            </section>
          </Col>
        </Row>
      </Container>

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

const FormCSS = css`
  border: 1px solid red;
  margin-top: 20vh;

  Row {
    border: 1px solid blue;
  }
`
