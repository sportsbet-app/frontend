import React, { useState, useEffect } from 'react'
import UGameCard from '../Cards/UpcomingGameCard'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { colors, buttonSize, breakpoints } from '../../Theme/Variables'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }

    :hover {
        background: ${props => props.primary ? `${colors.secondary}` : `${colors.primary}`};

        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.42);
        transition-timing-function: ease-in-out;
        transition: 0.4s; 
    }
`

const NFL = props => {

    const [viewAll, setViewAll] = useState(false)

    return (

        <Container>
            <Card>
                {!props.nfl.length ?
                    <Loader
                        type="ThreeDots"
                        color={colors.primary}
                        height={80}
                        width={80}
                    />
                    :
                    viewAll ?
                        props.nfl.map(el => <UGameCard gameInfo={el} />)
                        :
                        props.nfl.slice(0, 3).map(el => <UGameCard gameInfo={el} />)
                }
            </Card>
            <Button primary onClick={() => setViewAll(!viewAll)}>View {viewAll ? 'Less' : 'All'} Games</Button>
        </Container>

    )

}

const mapStateToProps = state => ({ nfl: state.nflTeamData })

export default connect(mapStateToProps)(NFL);
