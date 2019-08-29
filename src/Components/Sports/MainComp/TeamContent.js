import React, { useState, useEffect } from 'react';
import axios from "axios";

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'

const Grouping = styled.div`
    max-width: 50%;
    margin: 50px 0;
    border: 5px solid red;
`

const TeamLogo = styled.img`
    max-width: 88px;
    padding: .5rem;
`

const GameRow = styled.div`
    display: flex;
    max-width: 96%;
    ${'' /* border: 1px solid ${colors.lightGrey}; */}
    margin: 0 auto;
    margin-top: 1.2rem;
    background: #fff;
    min-height: 15vh;
    ${'' /* border: 2px solid ${colors.primary}; */}
`

const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    max-width: 140px;
    background: ${colors.primary};
    color: #fff;
    padding: .5rem;
    text-align: left;

    h3 {
        font-size: .925rem;
    }

`

const GameTeamColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    justify-content: space-between;
    width: 100%;
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 20%;
`

const Team1 = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 48%;
    border-bottom: .8px dotted ${colors.lightGrey};
`

const Team2 = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 48%;
`

const TeamBet = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 80%;
`

const ButtonRow = styled.div`
width: 100%;
        display: flex;
    justify-content: space-around;
    margin: 5px 2px;
    padding: .5rem;
    font-weight: bold;
`

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }
`

const TeamContent = (props) => {
    //This component Takes in props from to display the information for the teams.

    return (
        // <div>
        //     <div>
        //         <div >
        //             <TeamLogo src={props.team.strTeamLogo} alt="" />
        //         </div>
        //         {/* {props.team.strTeam} */}
        //     </div>
        // </div>

        <GameRow>
            <GameInfo>
                <h3>Game Info Goes Here</h3>
            </GameInfo>
            <GameTeamColumn>
                <Team1>
                    <LogoContainer>
                        <TeamLogo src={props.team.first.strTeamLogo} title={`${props.team.first.strTeam}`} alt={`${props.team.first.strTeam}`} />
                    </LogoContainer>
                    <TeamBet>
                        <ButtonRow>
                            <Button medium>-12</Button>
                            <Button medium>420</Button>
                            <Button medium>-123</Button>
                        </ButtonRow>
                    </TeamBet>
                </Team1>


                <Team2>
                    <LogoContainer>
                        <TeamLogo src={props.team.second.strTeamLogo} title={`${props.team.second.strTeam}`} alt={`${props.team.second.strTeam}`} />
                    </LogoContainer>
                    <TeamBet>
                        <p>This is some content</p>
                    </TeamBet>
                </Team2>
            </GameTeamColumn>
        </GameRow>
    );
}

export default TeamContent;