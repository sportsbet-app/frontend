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

    return <Flex column startJ>
        <PropBetsContainer>

            <PropBetsHeader>
                <View left>Build Your Bet <i
                    style={{ cursor: 'help' }}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                    onClick={() => setShow(!show)}
                >
                    <FontAwesomeIcon size='sm' icon={faQuestionCircle} />
                    <InfoModal show={show} />
                </i></View>
            </PropBetsHeader>
            <PropForm />

        </PropBetsContainer>

        <PropBetsContainer bottom>
            <PropBetsHeader>
                <View left>Bets Made</View>
            </PropBetsHeader>
            <BetSlip />
        </PropBetsContainer>

    </Flex>

}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { confirmBet, teamData })(PropBets)
