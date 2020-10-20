
/** @jsx jsx */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import './App.css';
import Media from 'react-media'
import { css, jsx } from '@emotion/core'

import Burger from '@animated-burgers/burger-arrow'
import '@animated-burgers/burger-arrow/dist/styles.css'

// import Header from './components/Header/Header'
import Splash from './components/Splash/Splash'
import Quote from './components/Quote/Quote'
import Intro from './components/Intro/Intro'
import Photography from './components/Photography/Photography'
import Projects from './components/Projects/Projects'
import Writing from './components/Writing/Writing'
import Contact from './components/Contact/Contact'



const App = () => {
  // Section refs
  const topRef = useRef()
  const introRef = useRef()
  const projectRef = useRef()
  const photoRef = useRef()
  const writingRef = useRef()
  const contactRef = useRef()

  const [isOpen, setIsOpen] = useState(false)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    document.title = `Rick Bresnahan`
    window.onscroll = () => {
      setOffset(window.pageYOffset / window.innerHeight)
    }
  }, [])

  const toggleOpen = event => {
    event.persist()
    setIsOpen(!isOpen)
  }

  const setOpenStatus = key => {
    return key === true ? 'open' : 'closed'
  }

  const scrollTo = id => {
    id.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="App">
      <Media queries={{
          mobile: "(max-width: 500px)",
          large: "(min-width: 501px)"
      }}>

        {matches => (
          <Fragment>

            {/* Mobile View */}
            {matches.mobile &&
                <div css={wrapper}>
                  <div css={headerCSS}>
                    <h1>R|B</h1>
                    <Burger direction='up' isOpen={isOpen} onClick={toggleOpen} style={{'font-size': '10px'}}/>
                  </div>
                  <div id={setOpenStatus(isOpen)} css={mobileCSS}>
                    <p className={offset >= 1.00 && offset < 2.20 ? 'active' : ''} onClick={() => scrollTo(introRef)}>Intro</p>
                    <p className={offset >= 2.20 && offset < 3.40 ? 'active' : ''} onClick={() => scrollTo(photoRef)}>Photography</p>
                    <p className={offset >= 3.40 && offset < 4.60 ? 'active' : ''} onClick={() => scrollTo(projectRef)}>Projects</p>
                    <p className={offset >= 4.60 && offset < 5.80 ? 'active' : ''} onClick={() => scrollTo(writingRef)}>Writing</p>
                    <p className={offset >= 5.80 ? 'active' : ''} onClick={() => scrollTo(contactRef)}>Contact</p>
                  </div>
                </div>
            }

            {/* Tablet/Desktop View */}
            {matches.large &&
              <div css={headerCSS}>
                <div>
                  <h1 onClick={() => scrollTo(topRef)}>R|B</h1>
                </div>
                <div style={{'margin-right': '5vw'}}>
                  <p className={offset >= 1.00 && offset < 2.20 ? 'active' : ''} onClick={() => scrollTo(introRef)}>About Me</p>
                  <p className={offset >= 2.20 && offset < 3.40 ? 'active' : ''} onClick={() => scrollTo(photoRef)}>Photography</p>
                  <p className={offset >= 3.40 && offset < 4.60 ? 'active' : ''} onClick={() => scrollTo(projectRef)}>Projects</p>
                  <p className={offset >= 4.60 && offset < 5.80 ? 'active' : ''} onClick={() => scrollTo(writingRef)}>Writing</p>
                  <p className={offset >= 5.80 ? 'active' : ''} onClick={() => scrollTo(contactRef)}>Contact</p>
                </div>
              </div>
            }

            </Fragment>
        )}

      </Media>

      <div ref={topRef}><Splash /></div>
      <Quote offset={offset}/>
      <div css={divCSS} ref={introRef}><Intro /></div>
      <div css={divCSS} ref={photoRef}><Photography /></div>
      <div css={divCSS} ref={projectRef}><Projects /></div>
      <div css={divCSS} ref={writingRef}><Writing /></div>
      <div css={divCSS} ref={contactRef}><Contact /></div>
    </div>
  )

}

export default App;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const divCSS = css`
  position: -webkit-sticky;
  position: relative;
  top: 0;
  z-index: 2;
`

const headerCSS = css`
  align-items: center;
  background: #212529;
  color: #fff;
  display: flex;
  height: 10vh;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  z-index: 10;

  div {
    display: flex;

    h1 {
      font-family: 'IBM Plex Mono';
      font-size: 2.5rem;
      margin: 0 10vw;

      @media (max-width: 780px) {
        margin: 0 5vw;
      }
    }

    .active {
      font-family: 'Libre Caslon Display';
      font-style: italic;
      font-weight: bold;

      @media (min-width: 600px) {
        font-size: 150%;
      }
    }

    p {
      align-items: center;
      display: flex;
      font-family: 'Montserrat';
      float: right;
      line-height: 150%;
      margin: 0 1rem;
      padding: .5rem;
      text-decoration: none;

      @media (max-width: 600px) {
        font-size: 60%;
        margin: 0;
      }

      @media (max-width: 780px) {
        margin: 0 .5rem;
      }
    }
  }
`

const wrapper = css`
  background: #212529;
  color: #fff;

  #closed {
    transform: translateY(-190px)
  }

  #open {
    transform: translateY(0px)
  }
`

const mobileCSS = css`
  background: #212529;
  flex-direction: column;
  font-family: 'Montserrat';
  height: 190px;
  justify-content: center;
  position: fixed;
  left: 0; top: 10vh;
  width: 100vw;
  transition: transform .7s
            cubic-bezier(0, .52, 0, 1);
  z-index: 5;

  p {
    text-align: left;
    text-indent: 5vw;
    width: 40vw;
  }
`
