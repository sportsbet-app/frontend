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
  flex-grow: 2;
  max-width: 1200px;
`

const BetBuilder = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  justify-content: center;
`



const PageContent = (props) => {
  const [type, setType]= useState()
  return (

    <PageContentContainer>
      <Content>
      <div>
                <button
                    primary small first
                    active={type === 1}
                    onClick={() => setType(1)}
                >Teams</button>
                <button
                    primary small middle
                    active={type === 2}
                    onClick={() => setType(2)}
                >Players</button>
                <button
                    primary small last
                    active={type === 3}
                    onClick={() => setType(3)}
                >Misc</button>
            </div>

            <div column>
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
            </div>
      </Content>
      <BetBuilder>
        <PropBets />
      </BetBuilder>
    </PageContentContainer>

  )
}

export default PageContent