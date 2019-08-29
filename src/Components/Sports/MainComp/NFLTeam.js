import React from "react";
import styled from 'styled-components'
import axios from 'axios';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'

import TeamContent from "./TeamContent";

import { colors, buttonSize } from '../../../Theme/Variables'

const Container = styled.div`
    max-width: 100%;
`

const NFLTeam = props => {

    if (!props.teams) return <Container>Loading</Container>

    else return <Container>
        {props.teams.map((pair, id) => <TeamContent key={id} team={pair} />)}
    </Container>

}

const mapStateToProps = state => ({ teams: state.nflTeamData })

export default connect(mapStateToProps)(NFLTeam);