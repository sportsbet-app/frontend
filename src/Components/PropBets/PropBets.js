import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import BetSlip from '../BetSlip/BetSlip'
import { confirmBet, teamData } from '../../Actions'
import { statOptions, playerOptions, statTypeOption } from '../../Assets/DummyData'
import { PropBetsContainer, PropBetsHeader, StyledButton, Flex, BetCount } from './styledComponents'
import Logo from '../../Assets/Logo.png'
import { Stats, HeadToHead, Trios } from './Views'
import InfoModal from './InfoModal'
import PropForm from './PropForm'


const PropBets = props => {

    // console.log(props)
    console.log(props.confirmedBets)
    const [show, setShow] = useState(false)
    const [type, setType] = useState(1)
    const [betSlip, setBetSlip] = useState()


    useEffect(() => {
        betSlip && props.confirmBet(betSlip)
        props.teamData()

    }, [betSlip,])



    const slipCount = props.confirmedBets.length


    return (

        <PropBetsContainer>

            <PropBetsHeader>
                <span onClick={() => setType(1)}>Build Your Bet <i
                    style={{ cursor: 'help' }}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                    onClick={() => setShow(!show)}
                >
                    <FontAwesomeIcon size='sm' icon={faQuestionCircle} />
                    <InfoModal show={show} />
                </i></span>
                <span onClick={() => setType(2)}><BetCount>{slipCount}</BetCount>Betslip</span>
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

    )

}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { confirmBet, teamData })(PropBets)
