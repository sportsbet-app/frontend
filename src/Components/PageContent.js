import React, { useState } from 'react';
import PropBets from './PropBets/PropBets'
import BetSlip from './BetSlip/BetSlip'
import styled from 'styled-components'
import { colors, buttonSize } from '../Theme/Variables'
import { Link, Route } from "react-router-dom";
import './PageContent.css';
import NFLTeam from './Sports/MainComp/NFLTeam';
import NFLPlayers from './Sports/MainComp/NFLPlayers';
import NFLMisc from './Sports/MainComp/NFLMisc';



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
  background: lightGrey;
  padding: 3rem 1rem;
  display:flex;
  flex-direction: column;
  flex-grow: 2;
  max-width: 65%;
`

const BetBuilder = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  justify-content: center;
`

const Container = styled.div`
  width: 104%;
  margin: -35px -12.5px 0px;
`

const Teams = styled.div`
  width: 100%;
`

const Button = styled.button`
  width: 33%;
  background: ${props => props.active ? colors.lightGrey : colors.secondary};
  padding: ${props => props.active ? buttonSize.active.large : buttonSize.large};
  outline: none;
  cursor: ${props => props.active && 'default'};
  
  &:hover {
    transition: .3s;
    background: ${props => !props.active && colors.lightGrey}
  }
`

const PageContent = (props) => {
  const [type, setType] = useState(1)
  return (

    <PageContentContainer>
      <Content>
        <Container>
          <Button
            active={type === 1}
            onClick={() => setType(1)}
          >Teams</Button>
          <Button
            active={type === 2}
            onClick={() => setType(2)}
          >Players</Button>
          <Button
            active={type === 3}
            onClick={() => setType(3)}
          >Misc</Button>
        </Container>

        <Teams>
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