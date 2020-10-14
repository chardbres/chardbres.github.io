/** @jsx jsx */
import React, { useEffect } from 'react';
import { css, jsx } from '@emotion/core'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

// Link imports
import LinkedIn from './../../assets/img/Intro/linkedin.png'
import GitHub from './../../assets/img/Intro/github.png'
import Resume from './../../assets/img/Intro/resume.svg'

// Logo imports
import Profile from './../../assets/img/Intro/Profile.jpeg'
import ReactLogo from './../../assets/img/Intro/react.svg'
import NodeLogo from './../../assets/img/Intro/nodejs.svg'
import MongoLogo from './../../assets/img/Intro/mongodb.svg'
import ExpressLogo from './../../assets/img/Intro/express.svg'
import JavascriptLogo from './../../assets/img/Intro/javascript.svg'
import NpmLogo from './../../assets/img/Intro/npm.svg'
import PostgresqlLogo from './../../assets/img/Intro/postgres.svg'
import HerokuLogo from './../../assets/img/Intro/heroku.svg'

// Resume import
import MyResume from './Resume.pdf'



const Intro = ({visible}) => {
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

  useEffect(() => {
    console.log(visible === 'shown' ? 'Intro here!' : 'Intro hidden!')
  },[visible])

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
        <Row className='LinksRow'>
          <a href='https://www.linkedin.com/in/rickbresnahan/' target='_blank' rel='noopener noreferrer'><img src={LinkedIn} alt='LinkedIn'/></a>
          <a href='https://github.com/chardbres' target='_blank' rel='noopener noreferrer'><img src={GitHub} alt='GitHub'/></a>
          <a href={MyResume} target='_blank' rel='noopener noreferrer'><img src={Resume} alt='Resume'/></a>
        </Row>
        <Row className='IconRow'>
          {icons.map(icon => {
            return <Icons icon={icon} />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Intro

const IntroCSS = css`
  background: #e8e8e8;
  height: 120vh;

  .ProfilePic {
    height: 70vh;
    margin: 0 auto 4vh;

    @media (max-width: 300px) {
      margin: 0 auto 10vh;
    }

    @media (min-width: 1201px) {
      margin: 0 auto 4vh;
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
        height: 5vh;
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

  .LinksRow {
    display: flex;
    justify-content: center;

    img {
      height: 5vh;
      margin: 15px 1vw;

      &:hover {
        opacity: 50%;
      }
    }
  }
`
//<a href="https://iconscout.com/icons/react" target="_blank">React Icon</a> by <a href="https://iconscout.com/contributors/fengquanli">Fengquan Li</a> on <a href="https://iconscout.com">Iconscout</a>
//<a href="https://iconscout.com/icons/express" target="_blank">Express Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
//<a href="https://iconscout.com/icons/javascript" target="_blank">Javascript Icon</a> by <a href="https://iconscout.com/contributors/alexandru-stoica">Alexandru Stoica</a> on <a href="https://iconscout.com">Iconscout</a>
//<a href="https://iconscout.com/icons/nodejs" target="_blank">Nodejs  Icon</a> by <a href="https://iconscout.com/contributors/benjamin-j-sperry">Benjamin J Sperry</a> on <a href="https://iconscout.com">Iconscout</a>
