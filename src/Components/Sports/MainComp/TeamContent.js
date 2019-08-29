import React, { useState, useEffect } from 'react';
import axios from "axios";

import styled from 'styled-components'

const Grouping = styled.div`
    max-width: 50%;
    margin: 50px 0;
    border: 5px solid red;
`

const TeamLogo = styled.img`
    max-width: 100%;
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