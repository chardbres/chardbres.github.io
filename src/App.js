
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
  const [isOpen, setIsOpen] = useState(false)
  const [offset, setOffset] = useState(0)
  // Section refs
  const topRef = useRef()
  const introRef = useRef()
  const projectRef = useRef()
  const photoRef = useRef()
  const writingRef = useRef()
  const contactRef = useRef()

  // Section offset values for sticky scrolling
  const offsets = {
    mobile: {
      intro: 1.00,
      photo: 2.20,
      project: 3.40,
      writing: 4.60,
      contact: 5.80
    },
    tablet: {
      intro: 1.20,
      photo: 2.40,
      project: 3.60,
      writing: 4.80,
      contact: 6.00
    },
    large: {
      intro: 2.10,
      photo: 3.30,
      project: 4.50,
      writing: 5.70,
      contact: 7.00
    },
  }

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

  const scrollTo = offset => {
    window.scrollTo({
      top: offset * window.innerHeight,
      behavior: 'smooth'
    })
    setIsOpen(false)
  }

  return (
    <div className="App">
      <Media queries={{
          mobile: "(max-width: 500px)",
          tablet: "(min-width: 501px)",
          large: "(min-width: 1025px)"
      }}>

        {matches => (
          <Fragment>

            {/* Mobile View */}
            {matches.mobile &&
                <div css={wrapper}>
                  <div css={headerCSS}>
                    <h1 onClick={() => scrollTo(topRef)}>R|B</h1>
                    <Burger className='burger' direction='up' isOpen={isOpen} onClick={toggleOpen} style={{'font-size': '10px'}}/>
                  </div>
                  <div id={setOpenStatus(isOpen)} css={mobileCSS}>
                    <p className={offset >= 1.00 && offset < 2.20 ? 'active' : ''} onClick={() => scrollTo(offsets.mobile.intro)}>About Me</p>
                    <p className={offset >= 2.20 && offset < 3.40 ? 'active' : ''} onClick={() => scrollTo(offsets.mobile.photo)}>Photography</p>
                    <p className={offset >= 3.40 && offset < 4.60 ? 'active' : ''} onClick={() => scrollTo(offsets.mobile.project)}>Projects</p>
                    <p className={offset >= 4.60 && offset < 5.80 ? 'active' : ''} onClick={() => scrollTo(offsets.mobile.writing)}>Writing</p>
                    <p className={offset >= 5.80 ? 'active' : ''} onClick={() => scrollTo(offsets.mobile.contact)}>Contact</p>
                  </div>
                </div>
            }

            {/* Tablet View */}
            {matches.tablet &&
              <div css={headerCSS}>
                <div>
                  <h1 onClick={() => scrollTo(topRef)}>R|B</h1>
                </div>
                <div style={{'margin-right': '5vw'}}>
                  <p className={offset >= 1.00 && offset < 2.20 ? 'active' : ''} onClick={() => scrollTo(offsets.tablet.intro)}>About Me</p>
                  <p className={offset >= 2.20 && offset < 3.40 ? 'active' : ''} onClick={() => scrollTo(offsets.tablet.photo)}>Photography</p>
                  <p className={offset >= 3.40 && offset < 4.60 ? 'active' : ''} onClick={() => scrollTo(offsets.tablet.project)}>Projects</p>
                  <p className={offset >= 4.60 && offset < 5.80 ? 'active' : ''} onClick={() => scrollTo(offsets.tablet.writing)}>Writing</p>
                  <p className={offset >= 5.80 ? 'active' : ''} onClick={() => scrollTo(offsets.tablet.contact)}>Contact</p>
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
                  <p className={offset >= 1.00 && offset < 2.20 ? 'active' : ''} onClick={() => scrollTo(offsets.large.intro)}>About Me</p>
                  <p className={offset >= 2.20 && offset < 3.40 ? 'active' : ''} onClick={() => scrollTo(offsets.large.photo)}>Photography</p>
                  <p className={offset >= 3.40 && offset < 4.60 ? 'active' : ''} onClick={() => scrollTo(offsets.large.project)}>Projects</p>
                  <p className={offset >= 4.60 && offset < 5.80 ? 'active' : ''} onClick={() => scrollTo(offsets.large.writing)}>Writing</p>
                  <p className={offset >= 5.80 ? 'active' : ''} onClick={() => scrollTo(offsets.large.contact)}>Contact</p>
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
  position: sticky;
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

  h1 {
    align-items: center;
    display: flex;
    margin: 0 5vw;
    vertical-align: middle;
  }

  .burger {
    margin: 0 10vw;
  }

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
