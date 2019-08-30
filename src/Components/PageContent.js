import React, { useState } from 'react';
import PropBets from './PropBets/PropBets'
import BetSlip from './BetSlip/BetSlip'

import styled from 'styled-components'
import { colors, buttonSize } from '../Theme/Variables'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link, Route } from "react-router-dom";
import './PageContent.css';
import NFLTeam from './Sports/MainComp/NFLTeam';
import NFLPlayers from './Sports/MainComp/NFLPlayers';
import NFLMisc from './Sports/MainComp/NFLMisc';


// const search = <FontAwesomeIcon icon={faSearch} />

const PageContentContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Sidebar = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  border: 2px solid magenta;
  margin: 0 .5rem;
`
const Content = styled.div`
  background: ${colors.secondary};
  padding: 0 0 1.4rem 0;
  display:flex;
  flex-direction: column;
  flex-grow: 2;
  max-width: 65%;
  max-height: 800px;
  overflow: scroll;
`

const BetBuilder = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  justify-content: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`

const Teams = styled.div`
  width: 100%;
`

const Button = styled.button`
  min-width: 33.33%;
  background: ${props => props.active ? colors.secondary : colors.darkGrey};
  padding: ${props => props.active ? buttonSize.active.large : buttonSize.large};
  outline: none;
  cursor: ${props => props.active && 'default'};
  border-left: 1px solid ${colors.secondary};
  
  &:hover {
    transition: .3s;
    background: ${props => !props.active && colors.primary}
  }
`

const SearchContainer = styled.div`
  margin: 4rem 2rem;

  
  input {
    width: 500px;
    border: 0;
    height: 40px;
    background: ${colors.secondary};
    font-size: 1.4rem;
    color: #fff;
    border-bottom: 2px dotted ${colors.darkGrey};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #fff;
    }
    :-ms-input-placeholder {
      color: #fff;
    }
  }
`


const PageContent = (props) => {
  const [type, setType] = useState(1)

  return (

    <PageContentContainer>
      <Content>
        <ButtonContainer>
          <Button
            active={type === 1}
            onClick={() => setType(1)}
          >Live Games</Button>
          <Button
            active={type === 2}
            onClick={() => setType(2)}
          >Players</Button>
          <Button
            active={type === 3}
            onClick={() => setType(3)}
          >Misc</Button>
        </ButtonContainer>

        <Teams>
          <SearchContainer><input type="text" placeholder="Enter Team Name To Search Live & Upcoming Games" /></SearchContainer>
          {(() => {
            switch (type) {
              case 1:
                return <NFLTeam />
              case 2:
                return <NFLPlayers />
              case 3:
                return <NFLMisc />
              default:
                return <NFLTeam />
            }
          })()}
        </Teams>
      </Content>
      <BetBuilder>
        <PropBets />
      </BetBuilder>
    </PageContentContainer>

  )
}

export default PageContent