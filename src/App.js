import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import Logo from './Assets/Logo.png'
import SideBar from './PermaView/SideBar'
import HomePage from "./home"
import NavBar from './PermaView/NavBar'
import BetSlip from './Components/BetSlip/BetSlip'
import PageContent from './Components/PageContent'
import Favorites from './Components/Favorites/Favorites'

import CardContainer from './Components/Cards/CardContainer'

import styled from 'styled-components'
import GlobalStyle from './Theme/GlobalStyle';
import { colors, buttonSize } from './Theme/Variables.js'
import './index.css'

import './Theme/index.js'
import { set } from 'es-cookie';

const PageContainer = styled.div`
  background-color: #fff;
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 20px;
`

const NavContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: baseline;
  flex-direction: row;
  padding: 0 2rem;
  padding-bottom: 1.4rem;
`

const NavLinks = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
align-items: flex-end;
flex-wrap: wrap;
${'' /* border: 2px solid purple; */}
      ${'' /* align-items: flex-start; */}
    a {
      flex-wrap: wrap;
      padding-right: 3rem;
      font-size: 2rem;
      color: ${colors.darkGrey};
      text-decoration: none;
      :hover {
        color: ${colors.primary}
      }
      :active {
        color: ${colors.primary}
      }
    }
`

const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

function App() {
  const [sport, setSport] = useState('nfl')
  return (
    <div style={{ overflow: 'auto' }}>

      <SideBar />
      <PageContainer>
        <GlobalStyle />

        <NavContainer>

          <NavRow>
            <Link to="/">
              <img alt='Logo' style={{ width: '60%' }} src={Logo} />
            </Link>
          </NavRow>

          <NavLinks>
            <NavRow activeStyle={{ textDecoration: 'underline' }}>
              <Link to='/nfl' onClick={() => setSport('nfl')}>NFL</Link>
              <Link to='/mlb' onClick={() => setSport('mlb')}>MLB</Link>
              <Link to="/ncaa" onClick={() => setSport('ncaa')}>NCAA</Link>
              <Link to="/cfl" onClick={() => setSport('cfl')}>CFL</Link>
              <Link to="/nba" onClick={() => setSport('nba')}>NBA</Link>
            </NavRow>

            <NavRow>
              <NavBar />
            </NavRow>
          </NavLinks>

        </NavContainer>

        <CardContainer />
        <Favorites />
        <PageContent sport={sport} />
        <div id='wrap' className='wrapper'>
          <BetSlip />
        </div>
      </PageContainer>
    </div>
  )
}

export default App
