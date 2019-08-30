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
        <SearchContainer><input type="text" placeholder="Enter Team Name To Search Live & Upcoming Games" /></SearchContainer>
        {props.teams.map((pair, id) => <TeamContent key={id} team={pair} />)}
    </Container>

}

const mapStateToProps = state => ({ teams: state.nflTeamData })

export default connect(mapStateToProps)(NFLTeam);