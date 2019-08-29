import React, { useState, useEffect } from 'react';
import axios from "axios";


import styled from 'styled-components'




const TeamContent = (props) => {
    //This component Takes in props from to display the information for the teams.
    
    return (
        <div>
            <div>
                <div >
                    <img src={props.team.strTeamLogo}alt=""/>
                </div>
                {props.team.strTeam}
            </div>
        </div>
    );
  }
  
  export default TeamContent;