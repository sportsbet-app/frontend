import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { confirmBet, teamData } from '../../Actions'
import { playerOptions } from '../../Assets/DummyData'
import { StyledButton, Flex } from './styledComponents'
import { Stats, HeadToHead, Trios } from './Views'

const PropForm = props => {

    const [type, setType] = useState(1)
    const [betSlip, setBetSlip] = useState()

    useEffect(() => {
        betSlip && props.confirmBet(betSlip)
        props.teamData()

    }, [betSlip])

    let playerSelects = playerOptions.map((player) => ({ value: player.name, label: player.name }))

    return <>

        <Flex>
            <StyledButton
                primary small first
                active={type === 1}
                onClick={() => setType(1)}
            >STAT</StyledButton>
            <StyledButton
                primary small middle
                active={type === 2}
                onClick={() => setType(2)}
            >H2H</StyledButton>
            <StyledButton
                primary small last
                active={type === 3}
                onClick={() => setType(3)}
            >TRIOS</StyledButton>
        </Flex>

        <Flex column>
            {(() => {
                switch (type) {
                    case 1:
                        return <Stats players={playerSelects} setBetSlip={setBetSlip} />
                    case 2:
                        return <HeadToHead players={playerSelects} setBetSlip={setBetSlip} />
                    case 3:
                        return <Trios players={playerSelects} setBetSlip={setBetSlip} />
                    default:
                        return <Stats players={playerSelects} setBetSlip={setBetSlip} />
                }
            })()}
        </Flex>

    </>

}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { confirmBet, teamData })(PropForm)
