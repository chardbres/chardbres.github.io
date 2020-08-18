/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'

import Profile from './../../assets/img/Intro/Profile.jpeg'
import ReactLogo from './../../assets/img/Intro/react.svg'
import NodeLogo from './../../assets/img/Intro/nodejs.svg'
import MongoLogo from './../../assets/img/Intro/mongodb.svg'
import ExpressLogo from './../../assets/img/Intro/express.svg'
import JavascriptLogo from './../../assets/img/Intro/javascript.svg'
import NpmLogo from './../../assets/img/Intro/npm.svg'
import PostgresqlLogo from './../../assets/img/Intro/postgres.svg'
import HerokuLogo from './../../assets/img/Intro/heroku.svg'



const Intro = () => {
  const icons = [
    [JavascriptLogo, 'JavaScript'],
    [ReactLogo, 'ReactJS'],
    [MongoLogo, 'MongoDB'],
    [ExpressLogo, 'ExpressJS'],
    [NodeLogo, 'NodeJS'],
    [NpmLogo, 'npm'],
    [PostgresqlLogo, 'PostgreSQL'],
    [HerokuLogo, 'Heroku']
  ]

  const Icons = props => {
    return <Col className='Bin'><img className='Icon' src={props.icon[0]} alt='icon' /><p>{props.icon[1]}</p></Col>
  }


  return (
    <div css={IntroCSS}>
      <div className='ProfilePic'>
        <Image src={Profile} roundedCircle />
        <h1>Rick Bresnahan</h1>
        <p>Software Engineer | Amateur Photographer</p>
      </div>
      <Container>
        <Row className='IconRow'>
          {icons.map(icon => {
            return <Icons icon={icon} />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Intro;

const IntroCSS = css`
  background: #e8e8e8;
  height: 100vh;
  position: relative;
  z-index: 2;

  .ProfilePic {
    height: 70%;
    margin: 0 auto 4vh;

    @media (max-width: 300px) {
      margin: 0 auto 10vh;
    }

    @media (min-width: 1201px) {
      margin: 0 auto 10vh;
    }

    img {
      border: 8px solid #212529;
      height: 40vh;
      filter: grayscale(100%);
      margin-top: 15vh;
      width: auto;
    }

    h1 {
      font-family: 'Montserrat';
      margin-top: 1rem;
    }

    p {
      font-family: 'Libre Caslon Display';
      @media (min-width: 501px) {
        font-size: 200%;
      }
    }
  }

  .IconRow {
    margin: auto;
    width: 90%;

    @media (min-width: 501px) {
      width: 70%;
    }

    .Bin {
      &: hover {
        .Icon {
          opacity: 10%;
        }

        p {
          visibility: visible;
          opacity: 100%;
        }
      }
    }

    .Icon {
      height: 4vh;
      margin: 15px 0;

      @media (min-width: 300px) {
        height: 5vh;
      }

      @media (min-width: 400px) {
        height: 6vh;
      }
    }

    p {
      visibility: hidden;
      font-family: 'Montserrat';
      position: absolute;
      left: 50%; top: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
    }
  }
`
//<a href="https://iconscout.com/icons/react" target="_blank">React Icon</a> by <a href="https://iconscout.com/contributors/fengquanli">Fengquan Li</a> on <a href="https://iconscout.com">Iconscout</a>
//<a href="https://iconscout.com/icons/express" target="_blank">Express Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
//<a href="https://iconscout.com/icons/javascript" target="_blank">Javascript Icon</a> by <a href="https://iconscout.com/contributors/alexandru-stoica">Alexandru Stoica</a> on <a href="https://iconscout.com">Iconscout</a>
//<a href="https://iconscout.com/icons/nodejs" target="_blank">Nodejs  Icon</a> by <a href="https://iconscout.com/contributors/benjamin-j-sperry">Benjamin J Sperry</a> on <a href="https://iconscout.com">Iconscout</a>
