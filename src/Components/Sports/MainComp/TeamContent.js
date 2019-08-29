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
`

const GameRow = styled.div`
    display: flex;
    max-width: 98%;
    ${'' /* border: 1px solid ${colors.lightGrey}; */}
    margin: 0 auto;
    margin-top: 1rem;
    background: #fff;
    min-height: 15vh;
    border: 2px solid ${colors.lightGrey};
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





const TeamContent = (props) => {
    //This component Takes in props from to display the information for the teams.

    return (
        <Grouping>
            <div>
                <div >
                    <TeamLogo src={props.team.first.strTeamLogo} alt="" />
                </div>
                {props.team.first.strTeam}
            </div>
            <div>
                <div >
                    <TeamLogo src={props.team.second.strTeamLogo} alt="" />
                </div>
                {props.team.second.strTeam}
            </div>
        </Grouping>
    );
}

export default TeamContent;