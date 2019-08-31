import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import BetSlip from '../BetSlip/BetSlip'
import { confirmBet, teamData } from '../../Actions'
import { PropBetsContainer, PropBetsHeader, Flex, BetCount, View } from './styledComponents'
import InfoModal from './InfoModal'
import PropForm from './PropForm'


const PropBets = props => {

    const [show, setShow] = useState(false)
    const [type, setType] = useState(1)
    const [hover, setHover] = useState(false)

    const slipCount = props.confirmedBets.length

    return <PropBetsContainer>

        <PropBetsHeader>
            <View
                active={type === 1} left
                onClick={() => setType(1)}
            >Build Your Prop Bet <i
                style={{ cursor: 'help' }}
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
                onClick={() => setShow(!show)}
            >
                    <FontAwesomeIcon size='sm' icon={faQuestionCircle} />
                    <InfoModal show={show} />
                </i></View>
            <View
                onClick={() => setType(2)}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                active={type === 2}
            >Betslip<BetCount active={type === 2} hover={hover}>{slipCount}</BetCount></View>
        </PropBetsHeader>

        <Flex column>
            {(() => {
                switch (type) {
                    case 1:
                        return <PropForm />
                    case 2:
                        return <BetSlip />
                    default:
                        return <PropForm />
                }
            })()}
        </Flex>

    </PropBetsContainer>

}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { confirmBet, teamData })(PropBets)
