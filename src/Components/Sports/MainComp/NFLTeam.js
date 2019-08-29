import React from "react";
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios';
import Loader from 'react-loader-spinner'

import TeamContent from "./TeamContent";

import { colors, buttonSize } from '../../../Theme/Variables'

const Container = styled.div`
    max-width: 100%;
`

const LoaderContainer = styled.div`
    margin-top: 3rem;
    text-align: center;
`

const NFLTeam = props => {

    if (!props.teams) return (
        <LoaderContainer>
            <Loader
                type="ThreeDots"
                color={colors.primary}
                height={80}
                width={80}
            />
        </LoaderContainer>
    )

    else return <Container>
        {props.teams.map((pair, id) => <TeamContent key={id} team={pair} />)}
    </Container>

}

const mapStateToProps = state => ({ teams: state.nflTeamData })

export default connect(mapStateToProps)(NFLTeam);