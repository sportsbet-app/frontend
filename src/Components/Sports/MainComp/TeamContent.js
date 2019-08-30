import React, { useState } from 'react'
import { connect } from 'react-redux'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'
import { makeFavorite, removeFavorite } from '../../../Actions'


const TeamLogo = styled.img`
    max-width: 80px;
    padding: 1.2rem;
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
    justify-content: space-around; 
    max-width: 140px;
    background: #fff;
    color: ${colors.darkGrey};
    border-right: 1px dotted ${colors.darkGrey};
    padding: 1.5rem;
    text-align: center;
    font-size: 1.4rem;


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
    padding: 1.4rem;
    font-weight: bold;
`

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: 1.2rem 2.6rem;

    :hover {
        background: ${props => props.primary ? `${colors.secondary}` : `${colors.primary}`};
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.42);
        transition-timing-function: ease-in-out;
        transition: 0.4s; 
    }
`

const StarContainer = styled.div`
    ${'' /* max-width: 20px; */}
    display: flex;
    align-items: center;
    color: ${props => props.liked ? colors.primary : "#bdbdbd"};
    text-align: center;
    font-size: 1.6rem;
    padding: .5rem;
    background: ${colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`

const ArrowContainer = styled.div`
    ${'' /* max-width: 20px; */}
    display: flex;
    align-items: center;
    color: ${colors.primary}
    text-align: center;
    font-size: 1.6rem;
    padding: .5rem;
    background: ${colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`

const star = <FontAwesomeIcon icon={faStar} />
const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const TeamContent = props => {
    //This component Takes in props from to display the information for the teams.

    const [liked, setLiked] = useState(false)

    return (
        <>


            <GameRow>
                <StarContainer liked={liked} onClick={() => {
                    setLiked(!liked)
                    !liked ? props.makeFavorite(props.team) : props.removeFavorite(props.team)
                }}>{star}</StarContainer>
                <GameInfo>
                    <p><strong>{props.team.first.strTeam}</strong><br />
                        @<br />
                        <strong>{props.team.second.strTeam}</strong>
                    </p>

                </GameInfo>
                <GameTeamColumn>
                    <Team1>
                        <LogoContainer>
                            <TeamLogo
                                src={props.team.first.strTeamBadge}
                                title={`${props.team.first.strTeam}`}
                                alt={`${props.team.first.strTeam}`}
                            />
                        </LogoContainer>
                        <TeamBet>
                            <ButtonRow>
                                <Button primary>-12</Button>
                                <Button primary>420</Button>
                                <Button primary>-123</Button>
                            </ButtonRow>
                        </TeamBet>
                    </Team1>


                    <Team2>
                        <LogoContainer>
                            <TeamLogo
                                src={props.team.second.strTeamBadge}
                                title={`${props.team.second.strTeam}`}
                                alt={`${props.team.second.strTeam}`}
                            />
                        </LogoContainer>
                        <TeamBet>
                            <ButtonRow>
                                <Button primary>-12</Button>
                                <Button primary>420</Button>
                                <Button primary>-123</Button>
                            </ButtonRow>
                        </TeamBet>
                    </Team2>
                </GameTeamColumn>
                <ArrowContainer>{arrow}</ArrowContainer>
            </GameRow>
        </>
    );
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { makeFavorite, removeFavorite })(TeamContent);